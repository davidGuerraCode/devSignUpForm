import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/core';

const Header = () => {
  return (
    <Flex justify="center">
      <Flex direction="column" align="center">
        <Heading as="h1">Registrate como Desarrollador</Heading>
        <Text fontSize="md" textAlign="center" mt={5} fontWeight="bold">
          Gracias por querer ser parte de la familia IMUKO, conociendo tus
          preferencias, podremos elegir el mejor proyecto para ti.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
