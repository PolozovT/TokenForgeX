import { PaletteOptions, alpha } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';

import { MIN_LAYOUT_WIDTH } from '../const';

const palette = {
  mode: 'dark',

  primary: {
    main: '#FFFFFF',
    dark: '#00C3F7',
    contrastText: '#4B4947',
  },

  error: {
    main: '#FF4A54',
    dark: '#C8294E',
    light: '#350C15',
    contrastText: '#FFFFFF',
  },

  background: {
    default: '#1C1C1C',
    paper: '#FFFFFF',
  },

  grey: {
    100: '#FEFEFE',
    200: '#F7F7F7',
    300: '#F8F8F4',
    400: '#F1F1E7',
    500: '#DFDFD8',
    600: '#C8C8C4',
    700: '#6B716D',
    800: '#4B4947',
    900: '#333131',
  },

  link: {
    main: '#3BD6FF',
  },

  text: {
    primary: '#fff',
    secondary: '#82899A',
    disabled: '#A7AFC0',
  },

  divider: '#42464F',

  common: {
    black: '#000000',
    white: '#ffffff',
  },
};

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: '"Cruyff", Arial, sans-serif',
  },
  spacing: 4,
  palette: palette as PaletteOptions,
  // breakpoints: testMainTheme.breakpoints,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': {
          minWidth: MIN_LAYOUT_WIDTH,
          minHeight: '100vh',
        },
        html: {
          overflowX: 'hidden',
          overflowY: 'scroll',
          scrollBehavior: 'smooth',
        },
        body: {
          position: 'relative',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          boxSizing: 'border-box',
          fontSize: 16,
          lineHeight: 1.2,
          margin: 0,
          padding: 0,
          textRendering: 'optimizeLegibility',
          backgroundPosition: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: palette.background.default,
          color: palette.text.primary,
          fontFeatureSettings: "'cv11' on, 'case' on, 'calt' off",
          fontFamily: '"Cruyff", Arial, sans-serif',
          // [testMainTheme.breakpoints.down('md')]: {
          //   backgroundSize: '50%',
          // },
          // [testMainTheme.breakpoints.down('sm')]: {
          //   backgroundSize: '70%',
          // },
        },
        a: {
          color: palette.link.main,
          fontSize: 'inherit',
          textDecoration: 'none',
          // transition: `color ${testMainTheme.transitions.duration.short}ms`,
        },
        hr: {
          borderWidth: '1px 0 0',
          borderStyle: 'solid',
          borderColor: palette.divider,
        },
        'button, input, optgroup, select, textarea': {
          fontFamily: 'inherit',
          fontSize: '100%',
          lineHeight: 1.1,
          margin: 0,
        },
        '::-moz-focus-inner': { borderStyle: 'none', padding: 0 },

        'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        'input[type=number]': {
          MozAppearance: 'textfield',
        },

        'strong, b': {
          fontWeight: 700,
        },
        label: {
          cursor: 'pointer',
        },
        '::selection': {
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
          textShadow: 'none',
          WebkitTextFillColor: palette.primary.contrastText,
        },
        '::-webkit-scrollbar': {
          width: 10,
          height: 10,
        },
        '::-webkit-scrollbar-corner': {
          background: 'transparent',
        },
        '::-webkit-scrollbar-track': {
          background: 'transparent',
          margin: 1,
          borderRadius: 10,
          '&:hover': {
            background: alpha(palette.grey[500], 0.5),
          },
        },
        '::-webkit-scrollbar-thumb': {
          background: alpha(palette.grey[700], 0.5),
          borderRadius: 10,
          // transition: `background-color ${testMainTheme.transitions.duration.short}ms`,
          '&:hover': {
            background: alpha(palette.grey[700], 0.7),
          },
        },
      },
    },
  },
};
