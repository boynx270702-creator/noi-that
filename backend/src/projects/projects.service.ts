import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(createDto: any) {
    return this.prisma.project.create({ data: createDto });
  }

  async getMeta() {
    const [types, units, budgets] = await Promise.all([
      this.prisma.project.findMany({ select: { projectType: true }, distinct: ['projectType'] }),
      this.prisma.project.findMany({ select: { unitName: true }, distinct: ['unitName'] }),
      this.prisma.project.findMany({ select: { budget: true }, distinct: ['budget'] })
    ]);
    return {
      types: types.map(t => t.projectType).filter(Boolean),
      units: units.map(u => u.unitName).filter(Boolean),
      budgets: budgets.map(b => b.budget).filter(Boolean)
    };
  }

  findAll(query?: any) {
    const { skip, take, projectType, unitName, budget } = query || {};
    const where: any = {};
    if (projectType && projectType !== '*') where.projectType = projectType;
    if (unitName && unitName !== '*') where.unitName = unitName;
    if (budget && budget !== '*') where.budget = budget;

    const findOptions: any = {
      where,
      orderBy: { createdAt: 'desc' },
    };

    if (skip !== undefined) findOptions.skip = Number(skip);
    if (take !== undefined) findOptions.take = Number(take);

    return this.prisma.project.findMany(findOptions);
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  update(id: number, updateDto: any) {
    return this.prisma.project.update({
      where: { id },
      data: updateDto,
    });
  }

  remove(id: number) {
    return this.prisma.project.delete({ where: { id } });
  }
}
