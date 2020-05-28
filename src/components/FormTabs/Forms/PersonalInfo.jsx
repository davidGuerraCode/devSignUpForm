import React, { useState } from 'react';
import AsyncSelect from './AsyncSelect';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  // FormHelperText,
  Input,
  Grid,
  Box,
  Textarea,
} from '@chakra-ui/core';

const PersonalInfo = ({ setFormState }) => {
  const [departmentsUri, setDepartmentsUri] = useState(null);
  const [errorMessage, setErrorMessage] = useState({});

  const notEmpty = (value) => value && value.toString().trim() !== '';

  const validateField = (element) => {
    switch (element.name) {
      case 'firstname':
      case 'lastname':
        if (notEmpty(element.value)) {
          setErrorMessage((current) => ({ ...current, [element.name]: '' }));
          // setErrorMessage((current) => delete current[element.name]);
          return setFormState((current) => ({
            ...current,
            personalInfo: {
              ...current.personalInfo,
              [element.name]: element.value,
            },
          }));
        }
        return setErrorMessage((current) => ({
          ...current,
          [element.name]: 'Este campo es requerido.',
        }));

      case 'phone':
        if (element.value.length > 12) {
          setErrorMessage((current) => ({ ...current, [element.name]: '' }));
          // setErrorMessage((current) => ({...current, delete current[element.name]}));
          return setFormState((current) => ({
            ...current,
            personalInfo: {
              ...current.personalInfo,
              [element.name]: element.value,
            },
          }));
        }
        return setErrorMessage((current) => ({
          ...current,
          [element.name]: 'Este campo debe contener mínimo 13 caracteres.',
        }));

      case 'email':
        if (
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(element.value)
        ) {
          setErrorMessage((current) => ({ ...current, [element.name]: '' }));
          // setErrorMessage((current) => ({...current, delete current[element.name]}));
          return setFormState((current) => ({
            ...current,
            personalInfo: {
              ...current.personalInfo,
              [element.name]: element.value,
            },
          }));
        }
        return setErrorMessage((current) => ({
          ...current,
          [element.name]: 'Debes ingresar un correo válido.',
        }));

      case 'country':
      case 'department':
        if (notEmpty(element.value)) {
          setErrorMessage((current) => ({ ...current, [element.name]: '' }));
          // setErrorMessage((current) => ({...current, delete current[element.name]}));
          return setFormState((current) => ({
            ...current,
            personalInfo: {
              ...current.personalInfo,
              [element.name]: element.value,
            },
          }));
        }
        return setErrorMessage((current) => ({
          ...current,
          [element.name]: 'Este campo es requerido.',
        }));

      default:
        break;
    }
  };

  const countryChangeHandler = (value, name) => {
    setDepartmentsUri(
      `${process.env.REACT_APP_BACKEND_API_URL}/departments/${value}`
    );

    const target = { value, name };
    validateField(target);
  };

  const departmentsChangeHandler = (value, name) => {
    const target = { value, name };
    validateField(target);
  };
  console.log('Errors', errorMessage);

  return (
    <FormControl m={8}>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={8}>
        <Box>
          <FormLabel htmlFor="firstname" className="required">
            Nombre
          </FormLabel>
          <Input
            id="firstname"
            placeholder="Jonh"
            name="firstname"
            bg="imuko.secondaryGray"
            onChange={(event) => validateField(event.target)}
          />
          <span className="error-message">{errorMessage.firstname}</span>
        </Box>

        <Box>
          <FormLabel htmlFor="lastname" className="required">
            Apellido
          </FormLabel>
          <Input
            id="lastname"
            name="lastname"
            placeholder="Doe"
            bg="imuko.secondaryGray"
            onChange={(event) => validateField(event.target)}
          />
          <span className="error-message">{errorMessage.lastname}</span>
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
          <FormLabel htmlFor="phone" className="required">
            Teléfono
          </FormLabel>
          <Input
            type="phone"
            id="phone"
            name="phone"
            placeholder="+XX 214 1247896"
            bg="imuko.secondaryGray"
            onChange={(event) => validateField(event.target)}
          />
          <span className="error-message">{errorMessage.phone}</span>
        </Box>

        <Box>
          <FormLabel htmlFor="email" className="required">
            Email
          </FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="jonh_doe@example.com"
            bg="imuko.secondaryGray"
            onChange={(event) => validateField(event.target)}
          />
          <span className="error-message">{errorMessage.email}</span>
        </Box>

        <Box>
          <FormLabel className="required">País de residencia</FormLabel>
          <AsyncSelect
            url={`${process.env.REACT_APP_BACKEND_API_URL}/country`}
            onSelect={countryChangeHandler}
            canShow
            name="country"
          />
          <span className="error-message">{errorMessage.country}</span>
        </Box>

        <Box>
          <FormLabel className="required">Departamento</FormLabel>
          <AsyncSelect
            url={departmentsUri}
            canShow={departmentsUri}
            name="department"
            onSelect={departmentsChangeHandler}
          />
          <span className="error-message">{errorMessage.department}</span>
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
