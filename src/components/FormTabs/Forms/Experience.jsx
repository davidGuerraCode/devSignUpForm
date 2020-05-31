import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Grid,
  Box,
  Textarea,
  Switch,
  RadioButtonGroup,
} from '@chakra-ui/core';
import CustomRadioButton from './CustomRadioButton/CustomRadioButton';

const Experience = ({ setFormState }) => {
  const [errorMessage, setErrorMessage] = useState({});
  const notEmpty = (value) => value && value.toString().trim() !== '';

  const onChangeFieldHandler = (name, value) => {
    return setFormState((current) => ({
      ...current,
      experience: {
        ...current.experience,
        [name]: { value },
      },
    }));
  };

  const validateField = React.useCallback(
    (element) => {
      switch (element.name) {
        case 'wageAspiration':
          if (notEmpty(element.value)) {
            setErrorMessage((current) => ({ ...current, [element.name]: '' }));
            return setFormState((current) => ({
              ...current,
              experience: {
                ...current.experience,
                [element.name]: { value: element.value, isValid: true },
              },
            }));
          }

          setFormState((current) => ({
            ...current,
            experience: {
              ...current.experience,
              [element.name]: { isValid: false },
            },
          }));

          return setErrorMessage((current) => ({
            ...current,
            [element.name]: 'Este campo es requerido.',
          }));

        case 'modality':
        case 'workStatus':
        case 'availability':
          if (notEmpty(element.value)) {
            setErrorMessage((current) => ({ ...current, [element.name]: '' }));
            return setFormState((current) => ({
              ...current,
              experience: {
                ...current.experience,
                [element.name]: { value: element.value, isValid: true },
              },
            }));
          }

          setFormState((current) => ({
            ...current,
            experience: {
              ...current.experience,
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

  return (
    <FormControl m={8}>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={8}>
        <Box>
          <FormLabel className="required">Estatus laboral</FormLabel>
          <RadioButtonGroup
            className="radioBtnsGroup"
            onChange={(val) => {
              const element = { name: 'workStatus', value: val };
              validateField(element);
            }}>
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
          </RadioButtonGroup>
        </Box>
        <Box>
          <FormLabel className="required">Modalidad</FormLabel>
          <RadioButtonGroup
            className="radioBtnsGroup"
            onChange={(val) => {
              const element = { name: 'modality', value: val };
              validateField(element);
            }}>
            <CustomRadioButton value="remote">Remoto</CustomRadioButton>
            <CustomRadioButton value="office">Oficina</CustomRadioButton>
            <CustomRadioButton value="anyway">Cualquiera</CustomRadioButton>
          </RadioButtonGroup>
        </Box>

        <Box>
          <FormLabel htmlFor="wageAspiration" className="required">
            Aspiración Salarial
          </FormLabel>
          <Select
            id="wageAspiration"
            name="wageAspiration"
            placeholder="Seleccione..."
            onChange={(event) => validateField(event.target)}
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
          <span className="error-message">{errorMessage.wageAspiration}</span>
        </Box>

        <Box>
          <FormLabel htmlFor="price">Precio Hora ($)</FormLabel>
          <Input
            type="number"
            id="price"
            name="priceHr"
            placeholder="$ 25"
            bg="imuko.secondaryGray"
            onChange={(event) =>
              onChangeFieldHandler(event.target.name, event.target.value)
            }
          />
        </Box>

        <Box>
          <FormLabel className="required">¿Disponibilidad?</FormLabel>
          <RadioButtonGroup
            className="radioBtnsGroup"
            onChange={(val) => {
              const element = { name: 'availability', value: val };
              validateField(element);
            }}>
            <CustomRadioButton value="byHrs">Por horas</CustomRadioButton>
            <CustomRadioButton value="halfTime">Medio tiempo</CustomRadioButton>
            <CustomRadioButton value="full time">
              Tiempo completo
            </CustomRadioButton>
          </RadioButtonGroup>
        </Box>

        <Box>
          <FormLabel htmlFor="canTravel">¿Disponibilidad de viajar?</FormLabel>
          <Switch
            id="canTravel"
            name="canTravel"
            color="orange"
            onChange={(event) =>
              onChangeFieldHandler(event.target.name, event.target.checked)
            }
          />
        </Box>

        <Box>
          <FormLabel htmlFor="yearExp">Años de experiencia</FormLabel>
          <Select
            id="yearExp"
            name="yearExp"
            placeholder="Seleccione..."
            onChange={(event) =>
              onChangeFieldHandler(event.target.name, event.target.value)
            }
            bg="imuko.secondaryGray">
            <option value="1">1 año</option>
            <option value="2">2 años</option>
            <option value="3">3 años</option>
            <option value="4">4 años</option>
            <option value="5">5 años</option>
          </Select>
        </Box>

        <Box gridColumn={{ md: 'span 2' }}>
          <FormLabel htmlFor="aboutExp">Hablanos de expreciencia</FormLabel>
          <Textarea
            resize="none"
            name="aboutExp"
            id="aboutExp"
            placeholder="Desarrollador web con mas de..."
            onChange={(event) =>
              onChangeFieldHandler(event.target.name, event.target.value)
            }
            bg="imuko.secondaryGray"
          />
        </Box>
      </Grid>
    </FormControl>
  );
};

export default Experience;
