/* eslint-disable @typescript-eslint/no-unused-vars */
import { PaletteOptions, Palette } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    primary: {
      main: string;
      light: string;
      dark: string;
      [key: string]: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      [key: string]: string;
    };
    accent: {
      main: string;
      light: string;
      dark: string;
      [key: string]: string;
    };
    neutral: {
      main: string;
      light: string;
      dark: string;
      [key: string]: string;
    };
  }
  interface PaletteOptions {
    primary: {
      main: string;
      light: string;
      dark: string;
      [key: string]: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      [key: string]: string;
    };
    accent: {
      main: string;
      light: string;
      dark: string;
      [key: string]: string;
    };
    neutral: {
      main: string;
      light: string;
      dark: string;
      [key: string]: string;
    };
  }
}
