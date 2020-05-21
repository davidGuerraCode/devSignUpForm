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

const FormTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  console.log('index', tabIndex);

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
            <PersonalInfo />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Experience />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex justifyContent={tabIndex < 1 ? 'flex-end' : 'space-between'} m={8}>
        <Button
          variantColor="orange"
          display={tabIndex < 1 ? 'none' : 'block'}
          onClick={() => setTabIndex((prevState) => prevState - 1)}>
          Volver
        </Button>
        <Button
          variantColor="orange"
          onClick={() => setTabIndex((prevState) => prevState + 1)}
          disabled={tabIndex === 2}>
          Siguiente
        </Button>
      </Flex>
    </>
  );
};

export default FormTabs;
