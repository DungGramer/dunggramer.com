const svgtofont = require('svgtofont');
const path = require('path');
const pkg = require('./package.json');

const config: import('svgtofont').SvgToFontOptions = {
  src: path.join(__dirname, 'icons'),
  dist: path.join(__dirname, 'font'),
  fontName: 'dg',
  typescript: true,
  css: {
    cssPath: 'https://icons.dunggramer.com/',
    fontSize: '16px',
  },
  // svgicons2svgfont: {
    // fontHeight: 1000,
    // normalize: true,
    // centerHorizontally: true,
    // centerVertically: true,
  // },
  outSVGReact: true,
  generateInfoData: true,
  website: {
    title: 'DG Icons',
    logo: path.resolve(__dirname, 'icons', 'logo.svg'),
    version: pkg.version,
    meta: {
      description: 'Complication of SVG icons I use in my projects.',
      keywords: 'svgtofont,TTF,EOT,WOFF,WOFF2,SVG',
    },
    description: 'Complication of SVG icons I use in my projects.',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/DungGramer/dunggramer.com/tree/master/libs/icons',
      },
      {
        title: 'Font Class',
        url: 'index.html',
      },
      {
        title: 'Unicode',
        url: 'unicode.html',
      },
      {
        title: 'Symbol',
        url: 'symbol.html',
      },
      {
        title: 'Source Map',
        url: 'info.json',
      },
    ],
  },
};

svgtofont(config);
