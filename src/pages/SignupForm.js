import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import DevSignupForm from './DevSignupForm';
import { FormTabs } from '../components/FormTabs';
import { Header } from '../components/Header';

const SignupForm = () => {
  return (
    <DevSignupForm>
      <Flex justifyContent="center">
        <Flex direction="column">
          <Header />
          <FormTabs />
        </Flex>
      </Flex>
    </DevSignupForm>
  );
};

export default SignupForm;
