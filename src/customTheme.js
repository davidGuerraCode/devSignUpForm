import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    imuko: {
      mainBlue: '#021F33',
      secondaryGray: '#EFEFEF',
      orange: '#F47405',
      orangeHover: '#CE5200',
      blue: '#2391E0',
    },
  },
};

export default customTheme;
