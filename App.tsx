import React from 'react';
import Routes from './src/routes';

import { ThemeProvider } from '@shopify/restyle';

import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}