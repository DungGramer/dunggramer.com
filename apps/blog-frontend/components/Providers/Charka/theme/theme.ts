'use client';

import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import * as components from './components';
import fonts from './fonts';
import sizes from './sizes';
import space from './space';
import styles from './styles';
import tokens from './tokens';
import textStyles from './text-styles';

const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    textStyles,
    sizes,
    space,
    semanticTokens: tokens,
    components: { ...components },

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
  }
  // withDefaultColorScheme({
  //   colorScheme: 'primary',
  // })
);

export default theme;
