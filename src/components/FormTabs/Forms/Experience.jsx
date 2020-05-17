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
  Textarea,
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

const Experience = () => {
  return (
    <FormControl m={8}>
      <Grid gap={8}>
        <Box>
          <FormLabel>Estatus laboral</FormLabel>
          <RadioButtonGroup isInline>
            <Grid
              templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }}
              autoFlow={{ sm: 'row', md: 'column' }}
              gap={4}>
              <CustomRadioButton leftIcon={DiJavascript1} value="working">
                Trabajando en empresa
              </CustomRadioButton>
              <CustomRadioButton leftIcon={DiNodejsSmall} value="searching">
                Buscando
              </CustomRadioButton>
              <CustomRadioButton leftIcon={DiTerminal} value="freelancer">
                Soy freelancer
              </CustomRadioButton>
              <CustomRadioButton leftIcon={DiBitbucket} value="available">
                Disponible
              </CustomRadioButton>
            </Grid>
          </RadioButtonGroup>
        </Box>
        <Box>
          <FormLabel>Modalidad</FormLabel>
          <RadioButtonGroup isInline>
            <CustomRadioButton leftIcon={DiJavascript1} value="remote">
              Remoto
            </CustomRadioButton>
            <CustomRadioButton leftIcon={DiNodejsSmall} value="office">
              Oficina
            </CustomRadioButton>
            <CustomRadioButton leftIcon={DiTerminal} value="anyway">
              Cualquiera
            </CustomRadioButton>
          </RadioButtonGroup>
        </Box>

        <Box>
          <FormLabel htmlFor="salary">Aspiración Salarial</FormLabel>
          <Select
            id="salary"
            placeholder="Seleccione..."
            bg="imuko.secondaryGray">
            <option value="$1.000.000 a $2.000.000">
              $1.000.000 a $2.000.000
            </option>
            <option value="$2.100.000 a $3.000.000">
              $2.100.000 a $3.000.000
            </option>
            <option value="$3.100.000 a $4.000.000">
              $3.100.000 a $4.000.000
            </option>
            <option value="$4.100.000 a $5.000.000">
              $4.100.000 a $5.000.000
            </option>
            <option value="Mas de $5.000.000">Mas de $5.000.000</option>
          </Select>
        </Box>

        <Box>
          <FormLabel htmlFor="price">Precio Hora ($)</FormLabel>
          <Input
            type="number"
            id="price"
            placeholder="$ 25"
            bg="imuko.secondaryGray"
          />
        </Box>

        <Box>
          <FormLabel>¿Disponibilidad?</FormLabel>
          <RadioButtonGroup isInline>
            <Grid
              templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }}
              autoFlow={{ sm: 'row', md: 'column' }}
              gap={4}>
              <CustomRadioButton leftIcon={DiJavascript1} value="byHrs">
                Por horas
              </CustomRadioButton>
              <CustomRadioButton leftIcon={DiNodejsSmall} value="halfTime">
                Medio tiempo
              </CustomRadioButton>
              <CustomRadioButton leftIcon={DiTerminal} value="full time">
                Tiempo completo
              </CustomRadioButton>
            </Grid>
          </RadioButtonGroup>
        </Box>

        <Box>
          <FormLabel htmlFor="bilingue">¿Disponibilidad de viajar?</FormLabel>
          <Switch id="bilingue" color="orange" />
        </Box>

        <Box>
          <FormLabel htmlFor="yearExp">Años de experiencia</FormLabel>
          <Select
            id="yearExp"
            placeholder="Seleccione..."
            bg="imuko.secondaryGray">
            <option value="1">1 año</option>
            <option value="2">2 años</option>
            <option value="3">3 años</option>
            <option value="4">4 años</option>
            <option value="5">5 años</option>
          </Select>
        </Box>

        <Box>
          <FormLabel>Hablanos de expreciencia</FormLabel>
          <Textarea
            resize="none"
            placeholder="Desarrollador web con mas de..."
            bg="imuko.secondaryGray"
          />
        </Box>
      </Grid>
    </FormControl>
  );
};

export default Experience;
