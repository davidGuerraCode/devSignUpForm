import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Flex,
  Box,
  Textarea,
} from '@chakra-ui/core';

const PersonalInfo = () => {
  return (
    <Flex direction={{ sm: 'column', md: 'row' }} px={10}>
      <FormControl>
        <Box mt={5}>
          <FormLabel htmlFor="firstname">Nombre</FormLabel>
          <Input id="firstname" placeholder="Jonh" bg="imuko.secondaryGray" />
        </Box>

        <Box mt={5}>
          <FormLabel htmlFor="lastname">Apellido</FormLabel>
          <Input id="lastname" placeholder="Doe" bg="imuko.secondaryGray" />
        </Box>

        <Box mt={5}>
          <FormLabel htmlFor="age">Edad</FormLabel>
          <Input
            type="number"
            id="age"
            placeholder="25"
            bg="imuko.secondaryGray"
          />
        </Box>

        <Box mt={5}>
          <FormLabel htmlFor="phone">Teléfono</FormLabel>
          <Input
            type="telephone"
            id="phone"
            placeholder="+XX 214 1247896"
            bg="imuko.secondaryGray"
          />
        </Box>

        <Box mt={5}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="jonh_doe@example.com"
            bg="imuko.secondaryGray"
          />
        </Box>

        <Box mt={5}>
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

        <Box mt={5}>
          <FormLabel htmlFor="departament">Departamento</FormLabel>
          <Select
            id="departament"
            defaultValue="Lorem"
            bg="imuko.secondaryGray">
            <option value="Lorem">Lorem</option>
            <option value="Lorem">Lorem</option>
          </Select>
        </Box>

        <Box mt={5}>
          <FormLabel>Hablanos de ti</FormLabel>
          <Textarea
            resize="none"
            placeholder="Hablanos de ti"
            bg="imuko.secondaryGray"
          />
        </Box>
      </FormControl>
    </Flex>
  );
};

export default PersonalInfo;
