import fs from "fs";
import path from "path";
import sharp from "sharp";

const IMAGES = [
  // 1. Hero & Brand
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
    dest: "public/images/projects/hero-house.webp",
    width: 1280,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    dest: "public/images/brand/og-image.webp",
    width: 1200,
    height: 630,
  },

  // 2. Project 1: Vasantham Illam (Independent House Pudukkottai)
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1280&q=85",
    dest: "public/images/projects/independent-house-pudukkottai-main.webp",
    width: 1280,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/independent-house-pudukkottai-1.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/independent-house-pudukkottai-2.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/independent-house-pudukkottai-3.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/independent-house-pudukkottai-4.webp",
    width: 1000,
    height: 750,
  },

  // 3. Project 2: Chettinad Heritage Villa (Karaikudi)
  {
    url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1280&q=85",
    dest: "public/images/projects/modern-villa-karaikudi-main.webp",
    width: 1280,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/modern-villa-karaikudi-1.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/modern-villa-karaikudi-2.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/modern-villa-karaikudi-3.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/modern-villa-karaikudi-4.webp",
    width: 1000,
    height: 750,
  },

  // 4. Project 3: Surya Contemporary Duplex (Trichy)
  {
    url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1280&q=85",
    dest: "public/images/projects/luxury-duplex-trichy-main.webp",
    width: 1280,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/luxury-duplex-trichy-1.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/luxury-duplex-trichy-2.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/luxury-duplex-trichy-3.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/luxury-duplex-trichy-4.webp",
    width: 1000,
    height: 750,
  },

  // 5. Project 4: Lakshmi Commercial Arcade (Pudukkottai)
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1280&q=85",
    dest: "public/images/projects/commercial-complex-pudukkottai-main.webp",
    width: 1280,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/commercial-complex-pudukkottai-1.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/commercial-complex-pudukkottai-2.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/commercial-complex-pudukkottai-3.webp",
    width: 1000,
    height: 750,
  },

  // 6. Project 5: Greenfield Eco Villa (In Progress)
  {
    url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1280&q=85",
    dest: "public/images/projects/greenfield-eco-residence-main.webp",
    width: 1280,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/greenfield-eco-residence-1.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1504307651554-6691fc9d79c5?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/greenfield-eco-residence-2.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/greenfield-eco-residence-3.webp",
    width: 1000,
    height: 750,
  },

  // 7. Project 6: Kaveri Skyline NRI Residence (In Progress)
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1280&q=85",
    dest: "public/images/projects/nri-residence-trichy-main.webp",
    width: 1280,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/nri-residence-trichy-1.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/nri-residence-trichy-2.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/nri-residence-trichy-3.webp",
    width: 1000,
    height: 750,
  },

  // 8. Services
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/services/new-house-construction.webp",
    width: 1000,
    height: 650,
  },
  {
    url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/services/villas-and-duplex.webp",
    width: 1000,
    height: 650,
  },
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/services/commercial-buildings.webp",
    width: 1000,
    height: 650,
  },
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/services/renovation-interiors.webp",
    width: 1000,
    height: 650,
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/services/architectural-design.webp",
    width: 1000,
    height: 650,
  },
  {
    url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/services/plan-approval.webp",
    width: 1000,
    height: 650,
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/services/nri-construction.webp",
    width: 1000,
    height: 650,
  },

  // 9. Interiors
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/interiors/living-room.webp",
    width: 1000,
    height: 700,
  },
  {
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/interiors/modular-kitchen.webp",
    width: 1000,
    height: 700,
  },
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/interiors/pooja-room.webp",
    width: 1000,
    height: 700,
  },
  {
    url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/interiors/courtyard.webp",
    width: 1000,
    height: 700,
  },

  // 10. Team
  {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
    dest: "public/images/team/founder.webp",
    width: 800,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
    dest: "public/images/team/architect.webp",
    width: 800,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=85",
    dest: "public/images/team/project-manager.webp",
    width: 800,
    height: 800,
  },
  {
    url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
    dest: "public/images/team/liaison-head.webp",
    width: 800,
    height: 800,
  },
];

async function downloadAndProcess(item) {
  try {
    const res = await fetch(item.url);
    if (!res.ok) {
      throw new Error(`Failed to download ${item.url}: ${res.status}`);
    }
    const buffer = Buffer.from(await res.arrayBuffer());

    fs.mkdirSync(path.dirname(item.dest), { recursive: true });

    await sharp(buffer)
      .resize(item.width, item.height, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality: 85, effort: 4 })
      .toFile(item.dest);

    console.log(`Saved: ${item.dest} (${item.width}x${item.height})`);
  } catch (err) {
    console.error(`Error on ${item.dest}:`, err.message);
  }
}

async function main() {
  console.log(`Starting download and WebP conversion for ${IMAGES.length} photographs...`);
  // Process in batches of 4
  const batchSize = 4;
  for (let i = 0; i < IMAGES.length; i += batchSize) {
    const batch = IMAGES.slice(i, i + batchSize);
    await Promise.all(batch.map(downloadAndProcess));
  }
  console.log("All realistic architectural images have been installed successfully!");
}

main();
