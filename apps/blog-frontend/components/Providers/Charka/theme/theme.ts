'use client';

import { extendTheme } from '@chakra-ui/react';
import { inter } from './fonts';

const theme = extendTheme({
  styles: {
    global: {
      '::selection': {
        backgroundColor: 'selection',
        color: 'white',
      },
      body: {
        backgroundColor: 'white',
        color: 'black',
      },
      'b, strong': {
        fontWeight: 'extrabold',
      },
    },
  },

  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  },

  // breakpoints: {
  //   base: '0px',
  //   sm: '576px',
  //   md: '768px',
  //   lg: '992px',
  //   xl: '1200px',
  //   '2xl': '1400px',
  //   '3xl': '1900px',
  // },

  // sizes: {
  //   container: {
  //     min: '320px',
  //     base: '100%',
  //     sm: '540px',
  //     md: '720px',
  //     lg: '960px',
  //     xl: '1140px',
  //     '2xl': '1320px',
  //     '3xl': '1820px',
  //   },
  // },

  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
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
  },
});

export default theme;
