import { createTheme } from '@mui/material/styles';
import { darkPalette, lightPalette } from './styles/styles';

const theme = createTheme({
  defaultColorScheme: 'dark',
  colorSchemes: {
    dark: { palette: darkPalette },
    light: { palette: lightPalette },
  },
});

export { theme };
export { GlobalStyles } from './components/global-styles/global-styles';
