import React, { useState } from 'react';
import AsyncSelect from './AsyncSelect';
import {
  FormControl,
  FormLabel,
  Input,
  Grid,
  Box,
  Textarea,
} from '@chakra-ui/core';

const PersonalInfo = ({ setFormState }) => {
  const [departmentsUri, setDepartmentsUri] = useState(null);
  const [errorMessage, setErrorMessage] = useState({});

  const onChangeFieldHandler = (name, value) => {
    return setFormState((current) => ({
      ...current,
      personalInfo: {
        ...current.personalInfo,
        [name]: { value },
      },
    }));
  };

  const notEmpty = (value) => value && value.toString().trim() !== '';

  const validateField = React.useCallback(
    (element) => {
      switch (element.name) {
        case 'firstname':
        case 'lastname':
          if (notEmpty(element.value)) {
            setErrorMessage((current) => ({ ...current, [element.name]: '' }));
            return setFormState((current) => ({
              ...current,
              personalInfo: {
                ...current.personalInfo,
                [element.name]: { value: element.value, isValid: true },
              },
            }));
          }

          setFormState((current) => ({
            ...current,
            personalInfo: {
              ...current.personalInfo,
              [element.name]: { isValid: false },
            },
          }));

          return setErrorMessage((current) => ({
            ...current,
            [element.name]: 'Este campo es requerido.',
          }));

        case 'phone':
          if (element.value.length > 12) {
            setErrorMessage((current) => ({ ...current, [element.name]: '' }));
            return setFormState((current) => ({
              ...current,
              personalInfo: {
                ...current.personalInfo,
                [element.name]: { value: element.value, isValid: true },
              },
            }));
          }

          setFormState((current) => ({
            ...current,
            personalInfo: {
              ...current.personalInfo,
              [element.name]: { isValid: false },
            },
          }));

          return setErrorMessage((current) => ({
            ...current,
            [element.name]: 'Este campo debe contener mínimo 13 caracteres.',
          }));

        case 'email':
          if (
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
              element.value
            )
          ) {
            setErrorMessage((current) => ({ ...current, [element.name]: '' }));
            return setFormState((current) => ({
              ...current,
              personalInfo: {
                ...current.personalInfo,
                [element.name]: { value: element.value, isValid: true },
              },
            }));
          }

          setFormState((current) => ({
            ...current,
            personalInfo: {
              ...current.personalInfo,
              [element.name]: { isValid: false },
            },
          }));

          return setErrorMessage((current) => ({
            ...current,
            [element.name]: 'Debes ingresar un correo válido.',
          }));

        case 'country':
        case 'department':
          if (notEmpty(element.value)) {
            setErrorMessage((current) => ({ ...current, [element.name]: '' }));
            return setFormState((current) => ({
              ...current,
              personalInfo: {
                ...current.personalInfo,
                [element.name]: { value: element.value, isValid: true },
              },
            }));
          }

          setFormState((current) => ({
            ...current,
            personalInfo: {
              ...current.personalInfo,
              [element.name]: { isValid: false },
            },
          }));

          return setErrorMessage((current) => ({
            ...current,
            [element.name]: 'Este campo es requerido.',
          }));

        default:
          break;
      }
    },
    [setFormState]
  );

  const countryChangeHandler = (element) => {
    setDepartmentsUri(
      `${process.env.REACT_APP_BACKEND_API_URL}/departments/${element.value}`
    );

    validateField(element);
  };

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
            name="age"
            placeholder="25"
            bg="imuko.secondaryGray"
            onChange={(event) =>
              onChangeFieldHandler(event.target.name, event.target.value)
            }
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
            onSelect={validateField}
          />
          <span className="error-message">{errorMessage.department}</span>
        </Box>

        <Box gridColumn={{ md: 'span 2' }}>
          <FormLabel>Hablanos de ti</FormLabel>
          <Textarea
            resize="none"
            placeholder="Hablanos de ti"
            name="aboutYou"
            bg="imuko.secondaryGray"
            onChange={(event) =>
              onChangeFieldHandler(event.target.name, event.target.value)
            }
          />
        </Box>
      </Grid>
    </FormControl>
  );
};

export default PersonalInfo;
