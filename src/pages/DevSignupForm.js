import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from '../customTheme';

const DevSignupForm = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};

export default DevSignupForm;
