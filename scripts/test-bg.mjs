import sharp from "sharp";

// Test rendering logo-transparent.png on light bg #F5EFE0
await sharp({
  create: {
    width: 600,
    height: 300,
    channels: 4,
    background: "#F5EFE0"
  }
})
  .composite([
    {
      input: await sharp("public/images/brand/logo-transparent.png").resize(400, 200).toBuffer(),
      top: 50,
      left: 100
    }
  ])
  .png()
  .toFile("public/images/brand/test-light.png");

// Test rendering on dark bg #131209
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
      input: await sharp("public/images/brand/logo-transparent.png").resize(400, 200).toBuffer(),
      top: 50,
      left: 100
    }
  ])
  .png()
  .toFile("public/images/brand/test-dark.png");

console.log("Rendered tests!");
