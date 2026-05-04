
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectDir = 'd:/astrology';
const imagesDir = path.join(projectDir, 'public/images');
const srcDir = path.join(projectDir, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

const allImageFiles = fs.readdirSync(imagesDir);
const allCodeFiles = getAllFiles(srcDir).concat([path.join(projectDir, 'index.html')]);

const unusedImages = [];

allImageFiles.forEach(image => {
  let isUsed = false;
  // Search for the image name (or base name) in all code files
  const imageName = image;
  const imageBase = path.parse(image).name;

  for (const file of allCodeFiles) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes(imageName)) {
      isUsed = true;
      break;
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

   for (const codeFile of allCodeFiles) {
      const content = fs.readFileSync(codeFile, 'utf8');
      if (content.includes(file)) {
        isUsed = true;
        break;
      }
   }
   if (!isUsed) unusedRootFiles.push(file);
});

console.log('\n--- Unused Root Files ---');
unusedRootFiles.forEach(f => console.log(f));
