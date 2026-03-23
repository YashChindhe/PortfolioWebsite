const fs = require('fs');
const files = [
  'src/components/About.jsx',
  'src/components/Experience.jsx',
  'src/components/Skills.jsx',
  'src/components/Work.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the content inside the <section> tag
  const sectionStartMatch = content.match(/<section[^>]*>/);
  if (!sectionStartMatch) {
    console.log('No section start in', file);
    return;
  }
  
  const sectionStartIdx = sectionStartMatch.index + sectionStartMatch[0].length;
  const sectionEndIdx = content.lastIndexOf('</section>');
  
  if (sectionEndIdx === -1) {
    console.log('No section end in', file);
    return;
  }
  
  const innerContent = content.substring(sectionStartIdx, sectionEndIdx);
  
  // If it already has MOBILE LAYOUT, skip
  if (innerContent.includes('\u2500\u2500 MOBILE LAYOUT \u2500\u2500')) {
    console.log('Already processed', file);
    return;
  }
  
  const newInnerContent = `
      {/* \u2500\u2500 MOBILE LAYOUT \u2500\u2500 */}
      <div className="md:hidden">
${innerContent}
      </div>

      {/* \u2500\u2500 DESKTOP LAYOUT \u2500\u2500 */}
      <div className="hidden md:block">
${innerContent}
      </div>
  `;
  
  const newContent = content.substring(0, sectionStartIdx) + newInnerContent + content.substring(sectionEndIdx);
  fs.writeFileSync(file, newContent);
  console.log('Processed', file);
});
