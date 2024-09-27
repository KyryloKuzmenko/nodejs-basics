import fs from 'node:fs';

const fileContent = await fs.readFileSync('src/text.txt', 'utf8');
console.log(fileContent);
