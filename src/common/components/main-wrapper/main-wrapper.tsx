'use client';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { GlobalStyles, theme } from '@/modules/theme/theme';

type Properties = {
  children: React.ReactNode;
};

const MainWrapper: React.FC<Properties> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export { MainWrapper };
