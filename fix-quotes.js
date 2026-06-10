const fs = require('fs');
const files = [
  'app/about/page.tsx',
  'app/press/options/page.tsx',
  'app/press/post-press/page.tsx',
  'app/press/pre-press/page.tsx',
  'app/press/printing/page.tsx',
  'app/press/process/page.tsx',
  'app/press/checklist/page.tsx'
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/South India's/g, "South India&apos;s");
  c = c.replace(/'Zero-Defect'/g, "&apos;Zero-Defect&apos;");
  c = c.replace(/don't/g, "don&apos;t");
  c = c.replace(/"pop"/g, "&quot;pop&quot;");
  c = c.replace(/"Signature."/g, "&quot;Signature.&quot;");
  c = c.replace(/'book block'/g, "&apos;book block&apos;");
  c = c.replace(/product's/g, "product&apos;s");
  c = c.replace(/'feel'/g, "&apos;feel&apos;");
  c = c.replace(/"saddle"/g, "&quot;saddle&quot;");
  c = c.replace(/designer's/g, "designer&apos;s");
  c = c.replace(/client's/g, "client&apos;s");
  c = c.replace(/"pre-flighting"/g, "&quot;pre-flighting&quot;");
  c = c.replace(/'Imposition'/g, "&apos;Imposition&apos;");
  c = c.replace(/"creep"/g, "&quot;creep&quot;");
  c = c.replace(/'Offset'/g, "&apos;Offset&apos;");
  c = c.replace(/'offsetting'/g, "&apos;offsetting&apos;");
  c = c.replace(/'towers'/g, "&apos;towers&apos;");
  c = c.replace(/"makeready"/g, "&quot;makeready&quot;");
  c = c.replace(/"signatures"/g, "&quot;signatures&quot;");
  c = c.replace(/"Interactive"/g, "&quot;Interactive&quot;");
  fs.writeFileSync(f, c);
});
console.log("fixed");
