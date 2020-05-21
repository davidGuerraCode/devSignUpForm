import React, { useState } from 'react';
import AsyncSelect from './AsyncSelect';
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
  Input,
  Grid,
  Box,
  Textarea,
} from '@chakra-ui/core';

const PersonalInfo = () => {
  const [departmentsUri, setDepartmentsUri] = useState(null);
  const [state, setState] = useState({});

  const countryChangeHandler = (value, name) => {
    setDepartmentsUri(
      `${process.env.REACT_APP_BACKEND_API_URL}/departments/${value}`
    );
    setState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const departmentsChangeHandler = (value, name) => {
    setState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <FormControl m={8}>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={8}>
        <Box>
          <FormLabel htmlFor="firstname">Nombre</FormLabel>
          <Input id="firstname" placeholder="Jonh" bg="imuko.secondaryGray" />
        </Box>

        <Box>
          <FormLabel htmlFor="lastname">Apellido</FormLabel>
          <Input id="lastname" placeholder="Doe" bg="imuko.secondaryGray" />
        </Box>

        <Box>
          <FormLabel htmlFor="age">Edad</FormLabel>
          <Input
            type="number"
            id="age"
            placeholder="25"
            bg="imuko.secondaryGray"
          />
        </Box>

        <Box>
          <FormLabel htmlFor="phone">Teléfono</FormLabel>
          <Input
            type="phone"
            id="phone"
            placeholder="+XX 214 1247896"
            bg="imuko.secondaryGray"
          />
        </Box>

        <Box>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="jonh_doe@example.com"
            bg="imuko.secondaryGray"
          />
        </Box>

        <Box>
          <AsyncSelect
            url={`${process.env.REACT_APP_BACKEND_API_URL}/country`}
            onSelect={countryChangeHandler}
            label="País de residencia"
            canShow
            id="country"
          />
        </Box>

        <Box>
          <AsyncSelect
            url={departmentsUri}
            canShow={departmentsUri}
            id="department"
            onSelect={departmentsChangeHandler}
            label="Departamento"
          />
        </Box>

        <Box gridColumn={{ md: 'span 2' }}>
          <FormLabel>Hablanos de ti</FormLabel>
          <Textarea
            resize="none"
            placeholder="Hablanos de ti"
            bg="imuko.secondaryGray"
          />
        </Box>
      </Grid>
    </FormControl>
  );
};

export default PersonalInfo;
