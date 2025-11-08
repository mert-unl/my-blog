
const fs = require('fs');
const path = require('path');

// 1️⃣ JSON dosya yolu
const jsonPath =  path.join(__dirname, '..', 'src', 'storage', 'data.json');
const rawJson = fs.readFileSync(jsonPath, 'utf-8');
const data = JSON.parse(rawJson);

// 2️⃣ PDF'den aldığın ham metin
const pdfText = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

// 3️⃣ JSON uyumlu hâle getir
const escapedText = pdfText
  .replace(/\\/g, '\\\\')
  .replace(/"/g, '\\"')
  .replace(/\r?\n/g, '\\n');

// 4️⃣ Yeni story objesi
const newStory = {
  id: (data.tr.stories.length + 1).toString(),
  slug: `dans${data.tr.stories.length + 1}`,
  title: `Yeni Hikaye ${data.tr.stories.length + 1}`,
  sum: escapedText.slice(0, 300),
  content: escapedText
};

// 5️⃣ stories array'e ekle
data.tr.stories.push(newStory);

// 6️⃣ Güncellenmiş JSON'u kaydet
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log('✅ Hikaye JSON’a eklendi!');
