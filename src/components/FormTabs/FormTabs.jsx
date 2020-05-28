import React, { useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Flex,
} from '@chakra-ui/core';
import { PersonalInfo, Skills, Experience } from './Forms';

const FormTabs = React.memo(() => {
  const [tabIndex, setTabIndex] = useState(0);
  const [signupForm, setSignupForm] = useState({
    personalInfo: {},
    skills: {},
    experience: {},
  });

  console.log('[FinalData]', signupForm);

  return (
    <>
      <Tabs
        size="md"
        variant="enclosed"
        index={tabIndex}
        onChange={(idx) => setTabIndex(idx)}>
        <TabList mt={10} px={5} justifyContent="center">
          <Tab _selected={{ color: 'white', bg: 'imuko.orange' }}>
            Información Personal
          </Tab>
          <Tab _selected={{ color: 'white', bg: 'imuko.orange' }}>Skills</Tab>
          <Tab _selected={{ color: 'white', bg: 'imuko.orange' }}>
            Experiencia e Intereses
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PersonalInfo setFormState={setSignupForm} />
          </TabPanel>
          <TabPanel>
            <Skills setFormState={setSignupForm} />
          </TabPanel>
          <TabPanel>
            <Experience setFormState={setSignupForm} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex justifyContent={tabIndex < 1 ? 'flex-end' : 'space-between'} m={8}>
        <Button
          variantColor="orange"
          display={tabIndex < 1 ? 'none' : 'block'}
          onClick={() => {
            window.scrollTo(0, 0);
            setTabIndex((prevState) => prevState - 1);
          }}>
          Volver
        </Button>
        <Button
          variantColor="orange"
          onClick={() => {
            window.scrollTo(0, 0);
            setTabIndex((prevState) => prevState + 1);
          }}
          disabled={tabIndex === 2}>
          Siguiente
        </Button>
      </Flex>
    </>
  );
});

export default FormTabs;
