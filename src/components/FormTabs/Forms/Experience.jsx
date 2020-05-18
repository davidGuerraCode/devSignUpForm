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

const Experience = () => {
  return (
    <FormControl m={8}>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={8}>
        <Box>
          <FormLabel>Estatus laboral</FormLabel>
          <RadioButtonGroup className="radioBtnsGroup">
            {/* <Grid
              templateColumns={{ sm: 'repeat(2, 1fr)' }}
              autoFlow={{ md: 'row' }}
              gap={4}> */}
            <CustomRadioButton
              fontSize={['13px', null, null, '1rem']}
              value="working">
              Trabajando en empresa
            </CustomRadioButton>
            <CustomRadioButton value="searching">Buscando</CustomRadioButton>
            <CustomRadioButton value="freelancer">
              Soy freelancer
            </CustomRadioButton>
            <CustomRadioButton value="available">Disponible</CustomRadioButton>
            {/* </Grid> */}
          </RadioButtonGroup>
        </Box>
        <Box>
          <FormLabel>Modalidad</FormLabel>
          <RadioButtonGroup className="radioBtnsGroup">
            {/* <Grid
              templateColumns={{ sm: 'repeat(2, 1fr)' }}
              autoFlow={{ md: 'row' }}
              gap={4}> */}
            <CustomRadioButton value="remote">Remoto</CustomRadioButton>
            <CustomRadioButton value="office">Oficina</CustomRadioButton>
            <CustomRadioButton value="anyway">Cualquiera</CustomRadioButton>
            {/* </Grid> */}
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
          <RadioButtonGroup className="radioBtnsGroup">
            {/* <Grid
              templateColumns={{ sm: 'repeat(2, 1fr)' }}
              autoFlow={{ md: 'row' }}
              gap={4}> */}
            <CustomRadioButton value="byHrs">Por horas</CustomRadioButton>
            <CustomRadioButton value="halfTime">Medio tiempo</CustomRadioButton>
            <CustomRadioButton value="full time">
              Tiempo completo
            </CustomRadioButton>
            {/* </Grid> */}
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

        <Box gridColumn={{ md: 'span 2' }}>
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
