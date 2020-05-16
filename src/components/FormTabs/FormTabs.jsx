import React from 'react';
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from '@chakra-ui/core';
import { PersonalInfo, Skills, Experience } from './Forms';

const FormTabs = () => {
  return (
    <Flex justify="center">
      <Box>
        <Tabs size="md" variant="enclosed" defaultIndex={1}>
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
          <TabList my={10} textAlign="center">
            <Tab _selected={{ color: 'white', bg: 'imuko.orange' }}>
              Información Personal
            </Tab>
            <Tab _selected={{ color: 'white', bg: 'imuko.orange' }}>Skills</Tab>
            <Tab _selected={{ color: 'white', bg: 'imuko.orange' }}>
              Experiencia e Intereses
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default FormTabs;
