const svgtofont = require('svgtofont');
const path = require('path');

svgtofont({
  src: path.join(__dirname, 'icons'),
  dist: path.join(__dirname, 'font'),
  fontName: 'dg',
  css: true,
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  outSVGReact: true,
  website: {
    title: 'DG Icons',
    logo: path.resolve(__dirname, 'icons', 'logo.svg'),
    version: "1.0",
    meta: {
      viewport: 'width=device-width, initial-scale=1',
      description: 'Complication of SVG icons I use in my projects.',
      keywords: 'svgtofont,TTF,EOT,WOFF,WOFF2,SVG',
    },
    description: 'Complication of SVG icons I use in my projects.',
  },
  footerInfo: 'Licensed under the MIT License.',
}).then(() => {
  console.log('done');
});
