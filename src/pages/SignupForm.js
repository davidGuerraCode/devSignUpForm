import React from 'react';
import {Flex} from '@chakra-ui/core';
import DevSignupForm from './DevSignupForm';
import {FormTabs} from '../components/FormTabs';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

const SignupForm = () => {
  return (
    <DevSignupForm>
      <Header />
      <Flex justifyContent="center" mt={5} px="5">
        <Flex direction="column">
          <FormTabs />
        </Flex>
      </Flex>
      <Footer />
    </DevSignupForm>
  );
};

export default SignupForm;
