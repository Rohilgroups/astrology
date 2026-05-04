
const fs = require('fs');
const path = require('path');

const projectDir = 'd:/astrology';
const imagesDir = path.join(projectDir, 'public/images');
const srcDir = path.join(projectDir, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  try {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function(file) {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    });
    return arrayOfFiles;
  } catch (e) {
    return arrayOfFiles || [];
  }
}

const allImageFiles = fs.readdirSync(imagesDir);
const allSearchableFiles = getAllFiles(srcDir).concat([path.join(projectDir, 'index.html'), path.join(projectDir, 'vite.config.js')]);

const unusedImages = [];

allImageFiles.forEach(image => {
  let isUsed = false;
  // Search for the image name (e.g. "logo.jpg") or path including the name
  
  for (const file of allSearchableFiles) {
    if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.html')) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes(image)) {
            isUsed = true;
            break;
        }
    }
  }

  if (!isUsed) {
    unusedImages.push(image);
  }
});

console.log('--- Unused Images ---');
unusedImages.forEach(img => console.log(img));

const rootFilesToCheck = [
  'addTranslation.js',
  'temp.js',
  'tempAbout2.js',
  'tempAll.js',
  'tempPhil.js',
  'tempServices.js'
];

const unusedRootFiles = [];
rootFilesToCheck.forEach(file => {
   let isUsed = false;
   const filePath = path.join(projectDir, file);
   if (!fs.existsSync(filePath)) return;

   // Check if the file is imported or mentioned in index.html (less likely for root .js)
   for (const searchFile of allSearchableFiles) {
      if (searchFile.endsWith('.js') || searchFile.endsWith('.jsx') || searchFile.endsWith('.html')) {
          const content = fs.readFileSync(searchFile, 'utf8');
          // Match import syntax or simple string inclusion
          if (content.includes(file)) {
            isUsed = true;
            break;
          }
      }
   }
   if (!isUsed) unusedRootFiles.push(file);
});

console.log('\n--- Unused Root Files ---');
unusedRootFiles.forEach(f => console.log(f));
