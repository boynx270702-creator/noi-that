const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const https = require('https');

const prisma = new PrismaClient();

const partnersData = require('./partners_data.json');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    if (!url.startsWith('http')) return resolve(false);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(true));
      } else {
        res.resume();
        resolve(false);
      }
    }).on('error', reject);
  });
};

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function seed() {
  console.log("Deleting old units...");
  await prisma.unit.deleteMany({});
  
  const destDir = path.join(__dirname, '../frontend/public/images/partners');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const usedSlugs = new Set();
  console.log("Seeding new partners...");
  for (let i = 0; i < partnersData.length; i++) {
    const p = partnersData[i];
    let baseSlug = slugify(p.name) || `partner-${i}`;
    let slug = baseSlug;
    let counter = 1;
    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    usedSlugs.add(slug);
    
    let avatarJson = null;

    if (p.logo) {
      if (p.logo.startsWith('http')) {
        const ext = p.logo.includes('.png') ? '.png' : p.logo.includes('.svg') ? '.svg' : '.jpg';
        const filename = `${slug}${ext}`;
        const filepath = path.join(destDir, filename);
        
        try {
          const success = await downloadImage(p.logo, filepath);
          if (success) {
            avatarJson = [{ url: `/images/partners/${filename}`, name: p.name }];
          }
        } catch (err) {
          console.log(`Failed to download logo for ${p.name}`);
        }
      } else {
        avatarJson = [{ url: p.logo, name: p.name }];
      }
    }

    await prisma.unit.create({
      data: {
        unitId: `UN${(i+1).toString().padStart(4, '0')}`,
        name: p.name,
        slug: slug,
        segment: p.segment,
        location: p.mainLocation === p.locations ? p.mainLocation : `${p.mainLocation} (Chính), ${p.locations.split(', ').filter(l => l !== p.mainLocation).join(', ')}`,
        projectType: p.category,
        style: p.category,
        experience: 5,
        status: 'ACTIVE',
        profile: p.website,
        shortDescription: p.detailedProducts,
        description: p.basis,
        avatar: avatarJson,
        isVisible: true
      }
    });
    console.log(`Created ${p.name}`);
  }

  console.log("Done!");
  await prisma.$disconnect();
}

seed().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
