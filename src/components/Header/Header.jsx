import React from 'react';
import { Flex, Image } from '@chakra-ui/core';

const Header = () => {
  return (
    <>
      <Flex
        width="100%"
        className="header"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'start' }}>
        <Image width="200px" src="imuko-logo.png" alt="imuko" ml={{ md: 5 }} />
      </Flex>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 105">
        <path
          fill="#F47405"
          fillOpacity="1"
          d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,101.3C672,107,768,85,864,64C960,43,1056,21,1152,26.7C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </>
  );
};

export default Header;
