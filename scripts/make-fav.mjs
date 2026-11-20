import sharp from "sharp";
const svg = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#5C6B2E"/>
  <path d="M16 6 L26 15 L22 15 L16 9 L10 15 L6 15 Z" fill="#F5EFE0"/>
  <rect x="10" y="16" width="3" height="10" fill="#F5EFE0"/>
  <rect x="15" y="14" width="3" height="12" fill="#DCE5BA"/>
  <rect x="20" y="16" width="3" height="10" fill="#F5EFE0"/>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile("public/favicon.ico");
console.log("Favicon created");
