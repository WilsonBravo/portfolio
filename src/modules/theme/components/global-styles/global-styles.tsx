import { Global, css } from '@emotion/react';
import { palette } from '../../styles/styles';

const GlobalStyles = () => (
  <Global
    styles={css({
      body: {
        margin: 0,
        display: 'flex',
        minHeight: '100vh',
        minWidth: '320px',
        flexDirection: 'column',
        backgroundColor: palette.background?.default,
      },
      '#root': {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
      },
      'input::-ms-clear, input::-ms-reveal': {
        display: 'none',
      },
    })}
  />
);

export { GlobalStyles };
