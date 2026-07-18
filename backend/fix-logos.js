const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.unit.updateMany({
    where: { name: 'REEPRO' },
    data: { avatar: JSON.stringify([{ url: 'https://reepro.vn/wp-content/uploads/2022/10/logo.png' }]) }
  });

  await prisma.unit.updateMany({
    where: { name: 'Givasolar' },
    data: { avatar: JSON.stringify([{ url: 'https://givasolar.com/wp-content/uploads/2018/11/LogoGivasolar.png' }]) }
  });

  await prisma.unit.updateMany({
    where: { name: 'DAT Solar' },
    data: { avatar: JSON.stringify([{ url: 'https://solar.datgroup.com.vn/_astro/logo.JNlAGpxK.png' }]) }
  });

  console.log('Fixed 3 logos successfully!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
