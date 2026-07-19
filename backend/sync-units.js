const { PrismaClient } = require('@prisma/client');

async function sync() {
  console.log("Starting sync...");
  
  // Connect to local DB
  const localPrisma = new PrismaClient({
    datasources: {
      db: {
        url: "postgresql://noithat_admin:noithat_password@localhost:5435/noithat_db"
      }
    }
  });

  // Connect to prod DB
  const prodPrisma = new PrismaClient({
    datasources: {
      db: {
        url: "postgresql://postgres:QMnKyNNzwOaZCIkCrNrMkKBEhtjYcgJm@acela.proxy.rlwy.net:48769/railway"
      }
    }
  });

  try {
    const localUnits = await localPrisma.unit.findMany();
    console.log(`Found ${localUnits.length} units locally.`);

    if (localUnits.length > 0) {
      // Upsert units into prod to prevent duplicate ID issues and keep relations intact
      for (const unit of localUnits) {
        await prodPrisma.unit.upsert({
          where: { id: unit.id },
          update: { ...unit },
          create: { ...unit }
        });
      }
      console.log(`Successfully synced ${localUnits.length} units to production.`);
    } else {
      console.log("No units found locally to sync.");
    }

  } catch (error) {
    console.error("Error during sync:", error);
  } finally {
    await localPrisma.$disconnect();
    await prodPrisma.$disconnect();
  }
}

sync();
