import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/core';
import { PersonalInfo, Skills, Experience } from './Forms';

const FormTabs = () => {
  return (
    <Tabs size="md" variant="enclosed" order="2" justifyContent="center">
      <TabList my={10} justifyContent="center" order="1">
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
  );
};

export default FormTabs;
