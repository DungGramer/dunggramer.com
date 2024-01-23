const colors = {
  tertiary: '#6B7076',
  icon: '#6B7076',
  // background: '#FFFFFF',
  stroke: '#E4E7EB',
  placeholder: '#91979E',
  highlight: '#E3E3E8',
  modalOverlay: 'rgba(0, 0, 0, 0.4)',
  whiteAlpha: 'rgba(255, 255, 255, 0.2)',
  label: {
    primary: '#27282B',
    secondary: '#71727A',
    muted: '#D6D8DB',
    button: '#FFFFFF',
  },
  bg: {
    base: '#FFFFFF',
    secondary: '#F4F4F6',
  },
  border: {
    base: '#DDDDE4',
    strong: '#C6C6D2',
    lite: '#EEEEF2',
  },

  success: {
    default: '#2ecc71',
    hover: '#3adb85',
    active: '#27ad6b',
    focus: '#54e595',
    loading: '#4ade80',
    disabled: '#a5d6a7'
  },
  error: {
    default: '#dc3545',
    hover: '#e54a55',
    active: '#cd2535',
    focus: '#f56565',
    loading: '#f56565',
    disabled: '#a82535'
  },
  warning: {
    default: '#ff9900',
    hover: '#ffa500',
    active: '#e58e00',
    focus: '#ffb74d',
    loading: '#ffa500',
    disabled: '#d58512'
  },
  info: {
    default: '#007bff',
    hover: '#0089ff',
    active: '#006de5',
    focus: '#1e90ff',
    loading: '#007bff',
    disabled: '#75a5ff'
  },



  // #C39A74
  primary: {
    1000: '#9d7657',
    900: '#a68360',
    800: '#b0906a',
    700: '#b99d75',
    600: '#c3a980',
    500: '#c9a380', // Note: Using the same value for 500 as in the example
    400: '#d2b79c',
    300: '#dbb0a8',
    200: '#e5c9b5',
    100: '#f0e3d8',
    shades: {
      1000: '#b08963',
      900: '#9e7853',
      800: '#8c6743',
      700: '#7a5734',
      600: '#684725',
      500: '#573817',
      400: '#472a07',
      300: '#371c00',
      200: '#2b0d00',
      100: '#230000',
    },
    tones: {
      1000: '#bd9775',
      900: '#b69577',
      800: '#b09278',
      700: '#a99079',
      600: '#a28d7a',
      500: '#9c8a7c',
      400: '#95887d',
      300: '#8e857e',
      200: '#87837f',
      100: '#808080',
    }
  },

  // #749dc3
  secondary: {
    1000: '#4e6d85',
    900: '#557593',
    800: '#6082a1',
    700: '#6b8ea9',
    600: '#769ab2',
    500: '#81a5bc',
    400: '#85a7cc',
    300: '#90b3db',
    200: '#a0c5e9',
    100: '#b5d8f7',
    shades: {
      1000: '#005eac',
      900: '#0053a0',
      800: '#004995',
      700: '#004089',
      600: '#00367e',
      500: '#002d73',
      400: '#002568',
      300: '#001d5d',
      200: '#001352',
      100: '#000448',
    },
    tones: {
      1000: '#2a6ab2',
      900: '#3d6cad',
      800: '#4a6fa7',
      700: '#5571a2',
      600: '#5e739c',
      500: '#667697',
      400: '#6e7891',
      300: '#747b8b',
      200: '#7a7d86',
      100: '#808080',
    }
  },

  // #268651
  complementary: {
    1000: '#3f9260',
    900: '#559d6f',
    800: '#68a77e',
    700: '#7bb28e',
    600: '#8ebd9d',
    500: '#a1c8ad',
    400: '#b4d3bd',
    300: '#c6decd',
    200: '#d9e9dd',
    100: '#ecf4ee',
    shades: {
      1000: '#127a46',
      900: '#006d3b',
      800: '#00612f',
      700: '#005424',
      600: '#00481a',
      500: '#003c0f',
      400: '#003101',
      300: '#002700',
      200: '#002000',
      100: '#001800',
    },
    tones: {
      1000: '#358757',
      900: '#40865b',
      800: '#4a8660',
      700: '#538565',
      600: '#5c8569',
      500: '#64846e',
      400: '#6b8372',
      300: '#728277',
      200: '#79817b',
      100: '#808080',
    }
  },

  accents: {
    complementary: '#5A66B2',
    analogous: '#A4C095',
    bold_contrast: '#F05A5A',
  },

  background: {
    light: '#f8f3ed',
    dark: '#323e48',
  },

  text: {
    light: {
      default: '#333333',
      inactive: '#666666',
      disabled: '#999999',
    },
    dark: {
      default: '#ffffff',
      inactive: '#eeeeee',
      disabled: '#cccccc',
    } 
  },

  // 避免和 white 冲突， black也是同理
  white_: {
    100: '#FEFEFE',
    200: '#FDFDFE',
    300: '#FBFBFC',
    400: '#F8FAFB',
    500: '#F6F8F9',
    600: '#F4F6F8',
    700: '#C3C5C6',
    800: '#929495',
    900: '#626263',
    1000: '#313132',
  },
  grayModern: {
    100: '#EFF0F1',
    200: '#DEE0E2',
    300: '#BDC1C5',
    400: '#9CA2A8',
    500: '#7B838B',
    600: '#5A646E',
    700: '#485058',
    800: '#363C42',
    900: '#24282C',
    1000: '#121416',
  },
  grayIron: {
    100: '#F3F3F3',
    200: '#E6E6E7',
    300: '#CDCDD0',
    400: '#B4B4B8',
    500: '#9B9BA1',
    600: '#828289',
    700: '#68686E',
    800: '#4E4E52',
    900: '#343437',
    1000: '#1A1A1B',
  },
  warn: {
    100: '#FFF2EC',
    400: '#FDB08A',
    600: '#FB7C3C',
    700: '#C96330',
  },
  rose: {
    100: '#FDEAF1',
  },
  blue: {
    100: '#EBF7FD',
    400: '#86CEF5',
    500: '#5EBDF2',
    600: '#36ADEF',
    700: '#2B8ABF',
  },
  brightBlue: {
    600: '#219BF4',
    700: '#0884DD',
  },
  adora: {
    600: '#8172D8',
  },
  purple: {
    300: '#DBBDE9',
    400: '#C99CDF',
    500: '#B779D4',
    600: '#A55AC9',
    700: '#7167AA',
  },
  frostyNightfall: {
    100: '#F5F5F8',
    200: '#EAEBF0',
  },

  piperider: {
    25: '#F4F1F0',
    50: '#FBE8E6',
    100: '#FFC9BA',
    200: '#FEA78E',
    300: '#FD8361',
    400: '#FD6A3E',
    500: '#FC4b1C',
    600: '#F24518',
    700: '#E43E12',
    800: '#D6370E',
    900: '#BD2905',
  },
};

export default colors;
