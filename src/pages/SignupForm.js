import React from 'react';
import { Box } from '@chakra-ui/core';
import DevSignupForm from './DevSignupForm';
import { FormTabs } from '../components/FormTabs';
import { Header } from '../components/Header';

const SignupForm = () => {
  return (
    <DevSignupForm>
      <Box pt={5}>
        <Header />
        <FormTabs bg="green.50" />
      </Box>
    </DevSignupForm>
  );
};

export default SignupForm;
