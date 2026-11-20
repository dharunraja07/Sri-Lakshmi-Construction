import fs from "fs";
import path from "path";
import sharp from "sharp";

const dirs = [
  "public/images/brand",
  "public/images/projects",
  "public/images/services",
  "public/images/interiors",
  "public/images/team",
];

dirs.forEach((d) => {
  fs.mkdirSync(d, { recursive: true });
});

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

// Helper to create an SVG with architectural styling
function createArchitecturalSvg(width, height, title, subtitle, themeColor = "#5C6B2E", bgColor = "#F0EAD6") {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#EAE3D2" />
        <stop offset="70%" stop-color="#DFD7C2" />
        <stop offset="100%" stop-color="#D0C6AF" />
      </linearGradient>
      <linearGradient id="facadeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FCFAF6" />
        <stop offset="100%" stop-color="#ECE5D4" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${themeColor}" />
        <stop offset="100%" stop-color="#7A8F46" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(92,107,46,0.06)" stroke-width="1"/>
      </pattern>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#skyGrad)" />
    <rect width="${width}" height="${height}" fill="url(#grid)" />

    <!-- Architectural Silhouette / Geometry -->
    <g transform="translate(${width * 0.1}, ${height * 0.25})">
      <!-- Main Structure Block -->
      <rect x="0" y="${height * 0.15}" width="${width * 0.5}" height="${height * 0.45}" rx="8" fill="url(#facadeGrad)" stroke="#D5CCB6" stroke-width="2" />
      
      <!-- Upper Tier / Cantilever -->
      <rect x="${width * 0.15}" y="${height * 0.02}" width="${width * 0.55}" height="${height * 0.32}" rx="6" fill="#FFFFFF" stroke="#D5CCB6" stroke-width="2" />
      
      <!-- Olive Accent Wall / Louvers -->
      <rect x="${width * 0.52}" y="${height * 0.06}" width="${width * 0.14}" height="${height * 0.24}" rx="4" fill="url(#accentGrad)" />
      
      <!-- Architectural Glass Fenestration -->
      <rect x="${width * 0.05}" y="${height * 0.22}" width="${width * 0.2}" height="${height * 0.18}" rx="4" fill="#2E3A20" opacity="0.8" />
      <rect x="${width * 0.28}" y="${height * 0.22}" width="${width * 0.16}" height="${height * 0.18}" rx="4" fill="#3D4B2D" opacity="0.85" />
      
      <!-- Balcony Glass Railing -->
      <rect x="${width * 0.15}" y="${height * 0.3}" width="${width * 0.38}" height="${height * 0.04}" rx="2" fill="rgba(255,255,255,0.7)" stroke="#A6BE63" stroke-width="1" />
      
      <!-- Horizontal Architectural Perspective Lines -->
      <line x1="-30" y1="${height * 0.6}" x2="${width * 0.85}" y2="${height * 0.6}" stroke="#5C6B2E" stroke-width="3" stroke-linecap="round" opacity="0.8" />
      <line x1="-20" y1="${height * 0.63}" x2="${width * 0.8}" y2="${height * 0.63}" stroke="#7A8F46" stroke-width="1" opacity="0.5" />
    </g>

    <!-- Overlay Badge with Editorial Typography -->
    <rect x="${width * 0.06}" y="${height * 0.72}" width="${width * 0.88}" height="${height * 0.22}" rx="12" fill="rgba(252, 250, 246, 0.92)" stroke="#E5DEC9" stroke-width="1.5" />
    
    <!-- Brand Mark inside badge -->
    <circle cx="${width * 0.11}" cy="${height * 0.83}" r="${Math.min(width, height) * 0.045}" fill="#5C6B2E" />
    <path d="M ${width * 0.10} ${height * 0.84} L ${width * 0.11} ${height * 0.81} L ${width * 0.12} ${height * 0.84} Z" fill="#F5EFE0" />

    <!-- Text -->
    <text x="${width * 0.16}" y="${height * 0.81}" font-family="sans-serif" font-size="${Math.max(16, width * 0.026)}" font-weight="700" fill="#1F1F1F">${safeTitle}</text>
    <text x="${width * 0.16}" y="${height * 0.87}" font-family="sans-serif" font-size="${Math.max(12, width * 0.018)}" font-weight="500" fill="#5C6B2E">${safeSubtitle}</text>
  </svg>
  `;
}

// Brand Logo SVG
function createLogoSvg() {
  return `
  <svg width="400" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Emblem -->
    <g transform="translate(10, 10)">
      <!-- Outer Hexagonal / Shield Architecture Badge -->
      <path d="M 40 4 L 72 22 L 72 58 L 40 76 L 8 58 L 8 22 Z" fill="#5C6B2E" />
      <path d="M 40 9 L 67 25 L 67 55 L 40 71 L 13 55 L 13 25 Z" fill="#FCFAF6" />
      
      <!-- Architectural Temple / Villa Gable Lines -->
      <path d="M 40 18 L 60 34 L 54 34 L 40 23 L 26 34 L 20 34 Z" fill="#5C6B2E" />
      
      <!-- Structural Pillars -->
      <rect x="25" y="36" width="6" height="24" rx="1.5" fill="#5C6B2E" />
      <rect x="37" y="32" width="6" height="28" rx="1.5" fill="#7A8F46" />
      <rect x="49" y="36" width="6" height="24" rx="1.5" fill="#5C6B2E" />
      
      <!-- Foundation Beam -->
      <rect x="20" y="61" width="40" height="4" rx="1" fill="#5C6B2E" />
    </g>

    <!-- Company Name Typography -->
    <text x="96" y="44" font-family="'Manrope', sans-serif, -apple-system" font-size="24" font-weight="800" letter-spacing="1.5" fill="#1F1F1F">SRI LAKSHMI</text>
    <text x="96" y="68" font-family="'Manrope', sans-serif, -apple-system" font-size="14" font-weight="700" letter-spacing="4" fill="#5C6B2E">CONSTRUCTION</text>
    
    <!-- Region Tagline -->
    <text x="96" y="86" font-family="'Manrope', sans-serif, -apple-system" font-size="9.5" font-weight="500" letter-spacing="1" fill="#7A7569">PUDUKKOTTAI • KARAIKUDI • TRICHY</text>
  </svg>
  `;
}

// Brand Logo Dark Mode SVG
function createLogoDarkSvg() {
  return `
  <svg width="400" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Emblem -->
    <g transform="translate(10, 10)">
      <path d="M 40 4 L 72 22 L 72 58 L 40 76 L 8 58 L 8 22 Z" fill="#5C6B2E" />
      <path d="M 40 9 L 67 25 L 67 55 L 40 71 L 13 55 L 13 25 Z" fill="#1F1F1F" />
      
      <path d="M 40 18 L 60 34 L 54 34 L 40 23 L 26 34 L 20 34 Z" fill="#A6BE63" />
      
      <rect x="25" y="36" width="6" height="24" rx="1.5" fill="#A6BE63" />
      <rect x="37" y="32" width="6" height="28" rx="1.5" fill="#DCE5BA" />
      <rect x="49" y="36" width="6" height="24" rx="1.5" fill="#A6BE63" />
      
      <rect x="20" y="61" width="40" height="4" rx="1" fill="#A6BE63" />
    </g>

    <!-- Company Name Typography -->
    <text x="96" y="44" font-family="'Manrope', sans-serif, -apple-system" font-size="24" font-weight="800" letter-spacing="1.5" fill="#F5EFE0">SRI LAKSHMI</text>
    <text x="96" y="68" font-family="'Manrope', sans-serif, -apple-system" font-size="14" font-weight="700" letter-spacing="4" fill="#A6BE63">CONSTRUCTION</text>
    
    <!-- Region Tagline -->
    <text x="96" y="86" font-family="'Manrope', sans-serif, -apple-system" font-size="9.5" font-weight="500" letter-spacing="1" fill="#A8A396">PUDUKKOTTAI • KARAIKUDI • TRICHY</text>
  </svg>
  `;
}

async function renderToWebp(svgString, outputPath, width, height) {
  await sharp(Buffer.from(svgString))
    .resize(width, height)
    .webp({ quality: 90 })
    .toFile(outputPath);
  console.log(`Generated: ${outputPath}`);
}

async function main() {
  // 1. Logos
  const logoLight = createLogoSvg();
  const logoDark = createLogoDarkSvg();
  fs.writeFileSync("public/images/brand/logo.svg", logoLight);
  fs.writeFileSync("public/images/brand/logo-dark.svg", logoDark);
  
  await sharp(Buffer.from(logoLight)).png().toFile("public/images/brand/logo.png");
  console.log("Generated brand logos");

  // 2. Hero & Projects
  const projectList = [
    { file: "hero-house.webp", title: "Sri Lakshmi Construction", sub: "Designed, Approved & Built by One Team" },
    { file: "independent-house-pudukkottai-main.webp", title: "Vasantham Illam", sub: "Independent Residence, Pudukkottai" },
    { file: "independent-house-pudukkottai-1.webp", title: "Vasantham Illam - Elevation", sub: "Architectural Perspective" },
    { file: "independent-house-pudukkottai-2.webp", title: "Vasantham Illam - Living Space", sub: "Natural Lighting & High Ceiling" },
    { file: "independent-house-pudukkottai-3.webp", title: "Vasantham Illam - Kitchen", sub: "Ergonomic Modular Kitchen" },
    { file: "independent-house-pudukkottai-4.webp", title: "Vasantham Illam - Terrace Sitout", sub: "Covered Balcony Lounge" },

    { file: "modern-villa-karaikudi-main.webp", title: "Chettinad Heritage Villa", sub: "Courtyard Residence, Karaikudi" },
    { file: "modern-villa-karaikudi-1.webp", title: "Heritage Villa - Central Mutram", sub: "Traditional Skylit Courtyard" },
    { file: "modern-villa-karaikudi-2.webp", title: "Heritage Villa - Teak Pillars", sub: "Artisan Woodwork & Athangudi Borders" },
    { file: "modern-villa-karaikudi-3.webp", title: "Heritage Villa - Master Suite", sub: "Contemporary Comfort & Heritage Charm" },
    { file: "modern-villa-karaikudi-4.webp", title: "Heritage Villa - Garden Portico", sub: "Landscaped Outer Verandah" },

    { file: "luxury-duplex-trichy-main.webp", title: "Surya Contemporary Duplex", sub: "Modern 4 BHK Residence, Trichy" },
    { file: "luxury-duplex-trichy-1.webp", title: "Surya Duplex - Cantilever Façade", sub: "Modern Geometric Massing" },
    { file: "luxury-duplex-trichy-2.webp", title: "Surya Duplex - Double-Height Hall", sub: "Cantilevered Floating Staircase" },
    { file: "luxury-duplex-trichy-3.webp", title: "Surya Duplex - Media Lounge", sub: "Acoustically Treated Entertainment" },
    { file: "luxury-duplex-trichy-4.webp", title: "Surya Duplex - Rooftop Gazebo", sub: "Evening Skyline View Terrace" },

    { file: "commercial-complex-pudukkottai-main.webp", title: "Lakshmi Commercial Arcade", sub: "Santhai Road, Pudukkottai" },
    { file: "commercial-complex-pudukkottai-1.webp", title: "Commercial Arcade - Retail Frontage", sub: "Full Glass Curtain Wall" },
    { file: "commercial-complex-pudukkottai-2.webp", title: "Commercial Arcade - Interior Floor", sub: "Column-free Flexible Retail Space" },
    { file: "commercial-complex-pudukkottai-3.webp", title: "Commercial Arcade - Basement Parking", sub: "Vehicular Ramp & Paved Stalls" },

    { file: "greenfield-eco-residence-main.webp", title: "Greenfield Eco Villa", sub: "Active Construction, Karaikudi" },
    { file: "greenfield-eco-residence-1.webp", title: "Greenfield Villa - Plinth Curing", sub: "IS 456 Structural Concrete Testing" },
    { file: "greenfield-eco-residence-2.webp", title: "Greenfield Villa - Cavity Brickwork", sub: "Thermal Insulation Construction" },
    { file: "greenfield-eco-residence-3.webp", title: "Greenfield Villa - Shuttering Stage", sub: "Engineered Slab Reinforcement" },

    { file: "nri-residence-trichy-main.webp", title: "Kaveri Skyline NRI Residence", sub: "Active Turnkey Construction, Trichy" },
    { file: "nri-residence-trichy-1.webp", title: "Kaveri Residence - Ground Floor Frame", sub: "Tata Tiscon 550D Reinforced Columns" },
    { file: "nri-residence-trichy-2.webp", title: "Kaveri Residence - Remote Inspection", sub: "Weekly HD Drone Progress Documentation" },
    { file: "nri-residence-trichy-3.webp", title: "Kaveri Residence - Architectural Model", sub: "Singapore Family Turnkey Project" },
  ];

  for (const item of projectList) {
    const svg = createArchitecturalSvg(1280, 800, item.title, item.sub, "#5C6B2E", "#F5EFE0");
    await renderToWebp(svg, path.join("public/images/projects", item.file), 1280, 800);
  }

  // 3. Services
  const servicesList = [
    { file: "new-house-construction.webp", title: "New House Construction", sub: "Complete Turnkey Independent Homes" },
    { file: "villas-and-duplex.webp", title: "Villas & Duplex Residences", sub: "Architectural Grandeur & Modern Luxury" },
    { file: "commercial-buildings.webp", title: "Commercial Complexes", sub: "Retail, Clinics & Multi-Tenant Spaces" },
    { file: "renovation-interiors.webp", title: "Renovation & Interiors", sub: "Structural Additions & Modular Revamps" },
    { file: "architectural-design.webp", title: "Architectural 3D Elevations", sub: "Photorealistic Vastu Spatial Planning" },
    { file: "plan-approval.webp", title: "Plan Approvals & Liaison", sub: "Municipal Corporation & DTCP Sanctions" },
    { file: "nri-construction.webp", title: "NRI Home Construction", sub: "Remote Project Management & Video Updates" },
  ];

  for (const s of servicesList) {
    const svg = createArchitecturalSvg(1000, 650, s.title, s.sub, "#5C6B2E", "#F5EFE0");
    await renderToWebp(svg, path.join("public/images/services", s.file), 1000, 650);
  }

  // 4. Interiors
  const interiors = [
    { file: "living-room.webp", title: "Double-Height Living Lounge", sub: "Natural Lighting & Vitrified Flooring" },
    { file: "modular-kitchen.webp", title: "Ergonomic Modular Kitchen", sub: "Quartz Countertops & Soft-close Cabinetry" },
    { file: "pooja-room.webp", title: "Vastu Ishanya Pooja Sanctuary", sub: "Carved Teakwood & Ambient Illumination" },
    { file: "courtyard.webp", title: "Chettinad Central Mutram", sub: "Rain Drainage & Natural Sky Pergola" },
  ];

  for (const it of interiors) {
    const svg = createArchitecturalSvg(1000, 700, it.title, it.sub, "#7A8F46", "#F5EFE0");
    await renderToWebp(svg, path.join("public/images/interiors", it.file), 1000, 700);
  }

  // 5. Team
  const teamList = [
    { file: "founder.webp", title: "Er. K. Sivakumar", sub: "Founder & Chief Structural Engineer" },
    { file: "architect.webp", title: "Ar. S. Revathi", sub: "Principal Architectural Designer" },
    { file: "project-manager.webp", title: "Er. R. Vignesh", sub: "Senior Site & Quality Manager" },
    { file: "liaison-head.webp", title: "M. Natarajan", sub: "Head of Government Approvals" },
  ];

  for (const t of teamList) {
    const svg = createArchitecturalSvg(800, 800, t.title, t.sub, "#5C6B2E", "#F5EFE0");
    await renderToWebp(svg, path.join("public/images/team", t.file), 800, 800);
  }

  // 6. OG Image
  const ogSvg = createArchitecturalSvg(1200, 630, "Sri Lakshmi Construction", "House Construction in Pudukkottai, Karaikudi & Trichy", "#5C6B2E", "#F5EFE0");
  await renderToWebp(ogSvg, "public/images/brand/og-image.webp", 1200, 630);

  console.log("All assets generated successfully!");
}

main().catch(console.error);
