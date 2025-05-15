import { PaletteOptions } from '@mui/material/styles';

const blue = {
  100: '#D9EEF2',
  200: '#B5D9E1',
  300: '#93C4D0',
  400: '#8BD1D9',
  500: '#4B7C9F',
  600: '#3A5E7C',
  700: '#2B465A',
  800: '#1B2E38',
  900: '#0C181E',
};

const green = {
  100: '#E6F3D6',
  200: '#A4D48C',
  300: '#8AC35D',
  400: '#7FC75A',
  500: '#5A9A3A',
  600: '#4B7E2F',
  700: '#36581F',
  800: '#233A13',
  900: '#121D09',
};

const red = {
  100: '#FDE7E9',
  200: '#F9C4C7',
  300: '#F7B7BC',
  400: '#E6636B',
  500: '#C84C52',
  600: '#9B3940',
  700: '#70292E',
  800: '#481B1D',
  900: '#280D0F',
};

const gray = {
  100: '#F0F0F0',
  200: '#D4D4D4',
  300: '#BEBEBE',
  400: '#B0B0B0',
  500: '#707070',
  600: '#545454',
  700: '#3B3B3B',
  800: '#222222',
  900: '#0D0D0D',
};

const palette: PaletteOptions = {
  primary: {
    main: blue[500],
    light: blue[200],
    dark: blue[700],
    ...blue,
  },
  secondary: {
    main: green[500],
    light: green[200],
    dark: green[700],
    ...green,
  },
  background: {
    default: '#FFF9F0',
    paper: '#F7F3EF',
  },
  accent: {
    main: red[500],
    light: red[200],
    dark: red[700],
    ...red,
  },
  neutral: {
    main: gray[500],
    light: gray[200],
    dark: gray[700],
    ...gray,
  },
};

export { palette };
