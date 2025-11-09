
const fs = require('fs');
const path = require('path');

const jsonPath =  path.join(__dirname, '..', 'src', 'storage', 'data.json');
const rawJson = fs.readFileSync(jsonPath, 'utf-8');
const data = JSON.parse(rawJson);

const pdfText = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

const escapedText = pdfText
  .replace(/\\/g, '\\\\')
  .replace(/"/g, '\\"')
  .replace(/\r?\n/g, '\\n');

const newStory = {
  id: (data.tr.stories.length + 1).toString(),
  slug: `dans${data.tr.stories.length + 1}`,
  title: `Yeni Hikaye ${data.tr.stories.length + 1}`,
  sum: escapedText.slice(0, 300),
  content: escapedText
};

data.tr.stories.push(newStory);

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log('hikaye eklendi');
