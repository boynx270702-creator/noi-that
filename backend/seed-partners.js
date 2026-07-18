const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const content = fs.readFileSync('other-partners.txt', 'utf-8');
  const lines = content.split('\n').filter(l => l.trim().length > 0);
  
  console.log(`Found ${lines.length} partners. Inserting...`);
  
  for (const line of lines) {
    const parts = line.split('\t');
    if (parts.length < 5) continue;
    
    const name = parts[0].trim();
    const category = parts[1].trim();
    const location = parts[2].trim();
    const url = parts[4].trim();
    const desc = parts[6] ? parts[6].trim() : '';
    
    await prisma.unit.create({
      data: {
        name: name,
        segment: 'cao-cap',
        location: location,
        projectType: 'Thiết kế & Thi công', // So it matches the filter
        style: 'Hiện đại',
        experience: 10,
        status: 'ACTIVE',
        avatar: JSON.stringify([{ url: url }]),
        shortDescription: desc,
        isVisible: true
      }
    });
  }
  console.log('Done seeding 30 partners!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
