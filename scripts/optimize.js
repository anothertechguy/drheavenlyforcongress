import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = "/Users/sean/Desktop/Antigravity Projects/drheavenlyforcongress/src/assets/endorsements";

async function processImages() {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
  console.log(`Found ${files.length} PNGs`);
  
  // Sort files for consistent naming if needed
  files.sort();

  let counter = 1;
  for (const file of files) {
    const oldPath = path.join(dir, file);
    // Determine the webp path
    const webpPath = path.join(dir, `endorsement${counter}.webp`);
    
    console.log(`Processing ${file} -> endorsement${counter}.webp`);
    
    try {
      await sharp(oldPath)
        .webp({ quality: 60 })
        .toFile(webpPath);
        
      console.log(`Successfully created endorsement${counter}.webp`);
      // Delete the original PNG safely
      fs.unlinkSync(oldPath);
    } catch (e) {
      console.error(`Failed to process ${file}:`, e);
    }
    
    counter++;
  }
}

processImages().catch(console.error);
