import sharp from "sharp";

// Crop the house symbol from the logo for favicon
const houseEmblem = await sharp("public/images/brand/logo-transparent.png")
  .extract({ left: 110, top: 195, width: 290, height: 290 })
  .resize(64, 64)
  .png()
  .toFile("public/favicon.ico");

console.log("Favicon created from official emblem!");
