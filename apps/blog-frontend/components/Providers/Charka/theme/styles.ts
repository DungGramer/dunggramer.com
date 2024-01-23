import { StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import colors from './colors';

export default {
  global: (props: StyleFunctionProps) => ({
    html: {
      scrollBehavior: 'smooth',
      height: '-webkit-fill-available',
    },
    'html,body': {
      height: '100%',
    },
    '::selection': {
      backgroundColor: 'selection',
      color: 'white',
    },
    '*, *::before, &::after': {
      borderColor: 'border.default',
    },
    body: {
      // bg: mode(colors.background.light, colors.background.dark)(props),
      // color: 'black',
      color: 'fg.default',
      bg: 'bg.canvas',
      overflowX: 'hidden',
    },
    'b, strong': {
      fontWeight: 'extrabold',
    },
    '#__next, #root': {
      display: 'flex',
      flexDirection: 'column',
      minH: '100%',
    },
  }),
};
