import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/images';
const outputDir = 'public/images'; // We'll save them as .webp in the same dir

const imagesToProcess = [
  { name: 'hero_graphic.png', width: 700 }, // Resize to 700px (2x for 350px display)
  { name: 'hero_bg.png' },
  { name: 'slide1.png' },
  { name: 'slide2.png' },
  { name: 'slide3.png' },
  { name: 'slide4.png' },
  { name: 'about_art.png' }
];

async function optimize() {
  console.log('Starting image optimization...');
  
  for (const img of imagesToProcess) {
    const inputPath = path.join(inputDir, img.name);
    const outputPath = path.join(outputDir, img.name.replace('.png', '.webp'));
    
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${inputPath}`);
      continue;
    }

    console.log(`Optimizing ${img.name}...`);
    let pipeline = sharp(inputPath);
    
    if (img.width) {
      pipeline = pipeline.resize(img.width);
    }
    
    await pipeline
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    const oldSize = fs.statSync(inputPath).size / 1024;
    const newSize = fs.statSync(outputPath).size / 1024;
    console.log(`Done: ${img.name} -> ${img.name.replace('.png', '.webp')} (${oldSize.toFixed(1)}KB -> ${newSize.toFixed(1)}KB)`);
  }
  
  console.log('Optimization complete!');
}

optimize().catch(err => {
  console.error('Error during optimization:', err);
  process.exit(1);
});
