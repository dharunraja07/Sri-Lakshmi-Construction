import fs from "fs";
import sharp from "sharp";

const items = [
  {
    url: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/greenfield-eco-residence-1.webp",
    width: 1000,
    height: 750,
  },
  {
    url: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/projects/greenfield-eco-residence-2.webp",
    width: 1000,
    height: 750,
  },
];

for (const item of items) {
  const res = await fetch(item.url);
  if (res.ok) {
    const buffer = Buffer.from(await res.arrayBuffer());
    await sharp(buffer)
      .resize(item.width, item.height, { fit: "cover" })
      .webp({ quality: 85 })
      .toFile(item.dest);
    console.log(`Saved: ${item.dest}`);
  } else {
    console.error(`Failed ${item.url}: ${res.status}`);
  }
}
