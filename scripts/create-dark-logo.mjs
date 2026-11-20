import sharp from "sharp";

const input = sharp("public/images/brand/logo-transparent.png");
const { data, info } = await input.raw().toBuffer({ resolveWithObject: true });

const darkData = Buffer.from(data);

// Loop through pixels
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const idx = (y * info.width + x) * 4;
    const a = darkData[idx + 3];
    if (a > 30) {
      const r = darkData[idx];
      const g = darkData[idx + 1];
      const b = darkData[idx + 2];

      // If it's the subtitle "ENGINEERS AND CONTRACTORS" (in the lower region y > 350)
      if (y > 340 && y < 430) {
        // Dark text pixels: r, g, b are all dark (< 110)
        if (r < 110 && g < 110 && b < 110) {
          // Change to warm cream / light gold: #F5EFE0 (245, 239, 224)
          darkData[idx] = 245;
          darkData[idx + 1] = 239;
          darkData[idx + 2] = 224;
        }
      }
    }
  }
}

await sharp(darkData, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .png()
  .toFile("public/images/brand/logo-dark.png");

await sharp("public/images/brand/logo-dark.png")
  .webp({ quality: 95 })
  .toFile("public/images/brand/logo-dark.webp");

// Composite on dark bg #131209 to verify
await sharp({
  create: {
    width: 600,
    height: 300,
    channels: 4,
    background: "#131209"
  }
})
  .composite([
    {
      input: await sharp("public/images/brand/logo-dark.png").resize(400, 200).toBuffer(),
      top: 50,
      left: 100
    }
  ])
  .png()
  .toFile("public/images/brand/test-dark-improved.png");

console.log("logo-dark generated successfully!");
