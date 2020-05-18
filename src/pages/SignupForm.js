import React from 'react';
import { Flex } from '@chakra-ui/core';
import DevSignupForm from './DevSignupForm';
import { FormTabs } from '../components/FormTabs';
import { Header } from '../components/Header';

const SignupForm = () => {
  return (
    <DevSignupForm>
      <Flex justifyContent="center" mt={5} px="5">
        <Flex direction="column">
          <Header />
          <FormTabs />
        </Flex>
      </Flex>
    </DevSignupForm>
  );
};

export default SignupForm;
