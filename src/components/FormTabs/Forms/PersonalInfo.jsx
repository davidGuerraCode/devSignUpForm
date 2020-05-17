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
} from '@chakra-ui/core';

const PersonalInfo = () => {
  return (
    <FormControl m={8}>
      <Grid
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={8}>
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
          <FormLabel htmlFor="country">País de residencia</FormLabel>
          <Select
            id="country"
            defaultValue="Venezuela"
            bg="imuko.secondaryGray">
            <option value="Venezuela">Venezuela</option>
            <option value="Colombia">Colombia</option>
            <option value="Argentina">Argentina</option>
          </Select>
        </Box>

        <Box>
          <FormLabel htmlFor="departament">Departamento</FormLabel>
          <Select
            id="departament"
            defaultValue="Lorem"
            bg="imuko.secondaryGray">
            <option value="Lorem">Lorem</option>
            <option value="Lorem">Lorem</option>
          </Select>
        </Box>

        <Box>
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
