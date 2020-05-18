import React from 'react';
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
  Input,
  Select,
  // Flex,
  Grid,
  Box,
  Switch,
  RadioButtonGroup,
} from '@chakra-ui/core';
import CustomRadioButton from './CustomRadioButton/CustomRadioButton';
import {
  DiJavascript1,
  DiNodejsSmall,
  // DiAws,
  DiBitbucket,
  DiTerminal,
} from 'react-icons/di';

const Skills = () => {
  return (
    <FormControl m={8}>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={8}>
        <Box>
          <FormLabel htmlFor="educationLevel">Nivel de formación</FormLabel>
          <Select
            id="educationLevel"
            placeholder="Seleccione..."
            bg="imuko.secondaryGray">
            <option value="tecnico">Técnico</option>
            <option value="tecnologo">Tecnòlogo</option>
            <option value="profesional">Profesional</option>
            <option value="empirico">Empírico</option>
          </Select>
        </Box>
        <Box>
          <FormLabel htmlFor="institute">Institución</FormLabel>
          <Input
            id="institute"
            placeholder="Universidad Nacional"
            bg="imuko.secondaryGray"
          />
        </Box>

        <Box>
          <FormLabel htmlFor="profession">Profesión</FormLabel>
          <Input
            id="profession"
            placeholder="Web Developer"
            bg="imuko.secondaryGray"
          />
        </Box>

        <Box>
          <FormLabel htmlFor="bilingue">¿Hablas inglés?</FormLabel>
          <Switch id="bilingue" color="orange" />
        </Box>

        <Box>
          <FormLabel>Eres...</FormLabel>
          <RadioButtonGroup className="radioBtnsGroup">
            {/* <Grid
              templateColumns={{ sm: 'repeat(2, 1fr)' }}
              autoFlow={{ md: 'row' }}
              gap={4}> */}
            <CustomRadioButton leftIcon={DiJavascript1} value="frontend">
              Frontend
            </CustomRadioButton>
            <CustomRadioButton leftIcon={DiNodejsSmall} value="backend">
              Backend
            </CustomRadioButton>
            <CustomRadioButton leftIcon={DiTerminal} value="fullstack">
              Fullstack
            </CustomRadioButton>
            <CustomRadioButton leftIcon={DiBitbucket} value="devOps">
              DevOps
            </CustomRadioButton>
            {/* </Grid> */}
          </RadioButtonGroup>
        </Box>

        <Box>
          <FormLabel htmlFor="lenguages">¿Que lenguajes dominas?</FormLabel>
          <Select
            id="lenguages"
            placeholder="Seleccione..."
            bg="imuko.secondaryGray">
            <option value="tecnico">Javascript</option>
            <option value="tecnologo">NodeJso</option>
            <option value="profesional">Java</option>
            <option value="empirico">Go</option>
          </Select>
        </Box>

        <Box>
          <FormLabel htmlFor="otherLenguage">Otros lenguajes</FormLabel>
          <Input id="otherLenguage" placeholder="F#" bg="imuko.secondaryGray" />
        </Box>

        <Box>
          <FormLabel htmlFor="frameworks">
            ¿Que framework o librería dominas?
          </FormLabel>
          <Select
            id="frameworks"
            placeholder="Seleccione..."
            bg="imuko.secondaryGray">
            <option value="tecnico">React</option>
            <option value="tecnologo">Express</option>
            <option value="profesional">Sprint</option>
            <option value="empirico">Django</option>
          </Select>
        </Box>
      </Grid>
    </FormControl>
  );
};

export default Skills;
