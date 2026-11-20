import sharp from "sharp";
import fs from "fs";

const inputPath = "C:/Users/dharu/.gemini/antigravity/brain/e90d9878-5847-47a1-9f8a-d0948a190cb1/.user_uploaded/media_1795179810784_75117aa0.jpg";

// 1. Copy exact original file to public/images/brand/
fs.copyFileSync(inputPath, "public/images/brand/logo-original.jpg");

// 2. Load raw pixels and convert pure white / near-white background into transparency
const image = sharp(inputPath);
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

const rgba = Buffer.alloc(info.width * info.height * 4);

for (let i = 0; i < info.width * info.height; i++) {
  const r = data[i * 3];
  const g = data[i * 3 + 1];
  const b = data[i * 3 + 2];

  rgba[i * 4] = r;
  rgba[i * 4 + 1] = g;
  rgba[i * 4 + 2] = b;

  // Background is near white (r, g, b > 245)
  // Compute how close to white it is
  const minVal = Math.min(r, g, b);
  if (r > 240 && g > 240 && b > 240) {
    if (minVal >= 252) {
      rgba[i * 4 + 3] = 0; // completely transparent
    } else {
      // Smooth feather alpha for edges
      const alpha = Math.round(((252 - minVal) / 12) * 255);
      rgba[i * 4 + 3] = Math.max(0, Math.min(255, alpha));
    }
  } else {
    rgba[i * 4 + 3] = 255;
  }
}

// Save transparent PNG and WebP versions
await sharp(rgba, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .png()
  .toFile("public/images/brand/logo-transparent.png");

await sharp(rgba, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .webp({ quality: 95 })
  .toFile("public/images/brand/logo-transparent.webp");

// Also save standard logo.png & logo.webp as transparent
await sharp("public/images/brand/logo-transparent.png")
  .toFile("public/images/brand/logo.png");

await sharp("public/images/brand/logo-transparent.webp")
  .toFile("public/images/brand/logo.webp");

console.log("Logo assets generated successfully!");
