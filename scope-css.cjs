const fs = require('fs');
let css = fs.readFileSync('src/styles/landing.css', 'utf8');

const rootMatch = css.match(/:root\s*\{[^}]+\}/);
const rootCss = rootMatch ? rootMatch[0] : '';
css = css.replace(/:root\s*\{[^}]+\}/, '');

const keyframes = [];
css = css.replace(/@keyframes\s+[^{]+\s*\{([^}]*\{[^}]*\}[^}]*)*\}/g, (match) => {
    keyframes.push(match);
    return '';
});

css = css.replace(/\*\s*\{[^}]+\}/g, '');
css = css.replace(/html,\s*body\s*\{[^}]+\}/g, '');
css = css.replace(/body\s*\{/g, '& {');
css = css.replace(/body::before\s*\{/g, '&::before {');

const finalCss = `
${rootCss}

#landing-root {
  ${css}
}

${keyframes.join('\n\n')}
`;

fs.writeFileSync('src/styles/landing.css', finalCss);
console.log('Successfully scoped landing.css');
