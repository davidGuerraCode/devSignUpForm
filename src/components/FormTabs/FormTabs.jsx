import React, { useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/core';
import { PersonalInfo, Skills, Experience } from './Forms';

const initialState = {
  personalInfo: {
    firstname: { value: '', isValid: false },
    lastname: { value: '', isValid: false },
    phone: { value: '', isValid: false },
    email: { value: '', isValid: false },
    country: { value: '', isValid: false },
    department: { value: '', isValid: false },
  },
  skills: {
    educationLevel: { value: '', isValid: false },
    devArea: { value: '', isValid: false },
    lenguages: { value: [], isValid: false },
    frameworks: { value: [], isValid: false },
  },
  experience: {
    workStatus: {
      value: '',
      isValid: false,
    },
    modality: {
      value: '',
      isValid: false,
    },
    availability: {
      value: '',
      isValid: false,
    },
    wageAspiration: {
      value: '',
      isValid: false,
    },
  },
};

const validateFields = (fields) => {
  const isValid = Object.entries(fields)
    .reduce((acc, field) => {
      if (field[1].hasOwnProperty('isValid')) {
        return [...acc, field[1]];
      }
      return acc;
    }, [])
    .every((field) => field.isValid === true);

  return isValid;
};

const FormTabs = React.memo(() => {
  const [tabIndex, setTabIndex] = useState(0);
  const [signupForm, setSignupForm] = useState(initialState);
  const [showData, setShowData] = useState(false);

  const isPersonalInfoValid = validateFields(signupForm.personalInfo);
  const isSkillsValid = validateFields(signupForm.skills);
  const isExpValid = validateFields(signupForm.experience);

  const onSubmitHandler = (target) => {
    console.log('{finalData}', signupForm);
    setShowData(true);
  };

  // console.log('[FinalData]', signupForm);

  return (
    <>
      <Flex justify="center">
        <Flex direction="column" align="center">
          <Heading as="h1" textAlign="center">
            Registrate como Desarrollador
          </Heading>
          <Text fontSize="md" textAlign="center" mt={5} fontWeight="bold">
            Gracias por querer ser parte de la familia IMUKO, conociendo tus
            preferencias, podremos elegir el mejor proyecto para ti.
          </Text>
        </Flex>
      </Flex>
      <Tabs
        size="md"
        variant="enclosed"
        index={tabIndex}
        onChange={(idx) => setTabIndex(idx)}>
        <TabList mt={10} px={5} justifyContent="center">
          <Tab _selected={{ color: 'white', bg: 'imuko.mainBlue' }}>
            Información Personal
          </Tab>
          <Tab
             isDisabled={!isPersonalInfoValid}
            _selected={{ color: 'white', bg: 'imuko.mainBlue' }}>
            Skills
          </Tab>
          <Tab
             isDisabled={!isPersonalInfoValid || !isSkillsValid}
            _selected={{ color: 'white', bg: 'imuko.mainBlue' }}>
            Experiencia e Intereses
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PersonalInfo setFormState={setSignupForm} />
          </TabPanel>
          <TabPanel>
            <Skills
              setFormState={setSignupForm}
              signupForm={signupForm.skills}
            />
          </TabPanel>
          <TabPanel>
            <Experience setFormState={setSignupForm} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex justifyContent={tabIndex < 1 ? 'flex-end' : 'space-between'} m={8}>
        <Button
          bg="imuko.mainBlue"
          color="#fff"
          _hover={{ bg: 'imuko.mainBlue', color: '#fff' }}
          display={tabIndex < 1 ? 'none' : 'block'}
          onClick={() => {
            window.scrollTo(0, 0);
            setTabIndex((prevState) => prevState - 1);
          }}>
          Volver
        </Button>
        {tabIndex === 2 ? (
          <Button
            bg="imuko.mainBlue"
            color="#fff"
            _hover={{ bg: 'imuko.mainBlue', color: '#fff' }}
            disabled={!isExpValid}
            onClick={(event) => onSubmitHandler(event.target)}>
            Registrate
          </Button>
        ) : (
          <Button
            bg="imuko.mainBlue"
            color="#fff"
            _hover={{ bg: 'imuko.mainBlue', color: '#fff' }}
            onClick={() => {
              window.scrollTo(0, 0);
              setTabIndex((prevState) => prevState + 1);
            }}
            disabled={
              !isPersonalInfoValid || (tabIndex === 1 && !isSkillsValid)
            }>
            Siguiente
          </Button>
        )}
      </Flex>
      {showData ? (
        <Flex justifyContent="center">
          <pre>{JSON.stringify(signupForm, null, 4)}</pre>
        </Flex>
      ) : null}
    </>
  );
});

export default FormTabs;
