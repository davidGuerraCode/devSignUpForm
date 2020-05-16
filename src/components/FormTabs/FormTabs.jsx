import React from 'react';
import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import { PersonalInfo } from './Forms';

const FormTabs = () => {
  return (
    <Flex justify="center">
      <Tabs size="md" variant="enclosed">
        <TabPanels>
          <TabPanel>
            <PersonalInfo />
          </TabPanel>
          <TabPanel>
            <p>Skills</p>
          </TabPanel>
          <TabPanel>
            <p>Experiencia e Intereses</p>
          </TabPanel>
        </TabPanels>
        <TabList my={10}>
          <Tab _selected={{ color: 'white', bg: 'imuko.blue' }}>
            Información Personal
          </Tab>
          <Tab _selected={{ color: 'white', bg: 'imuko.blue' }}>Skills</Tab>
          <Tab _selected={{ color: 'white', bg: 'imuko.blue' }}>
            Experiencia e Intereses
          </Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
};

export default FormTabs;
