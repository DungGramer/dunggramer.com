import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['cyrillic'],
  display: 'swap',
});

const fonts = {
  heading: `${inter.style.fontFamily},  -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
  body: `${inter.style.fontFamily},  -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
  inter: inter.style.fontFamily,

  weight: {
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

export default fonts;
