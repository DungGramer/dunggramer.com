'use client';

import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import fonts from './fonts';

const theme = extendTheme(
  {
    styles: {
      global: {
        html: {
          scrollBehavior: 'smooth',
          height: '-webkit-fill-available',
        },
        '::selection': {
          backgroundColor: 'selection',
          color: 'white',
        },
        body: {
          backgroundColor: 'white',
          color: 'black',
          overflowX: 'hidden',
        },
        'b, strong': {
          fontWeight: 'extrabold',
        },
      },
    },

    colors,

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

    fonts,
  }
  // withDefaultColorScheme({
  //   colorScheme: 'primary',
  // })
);

export default theme;
