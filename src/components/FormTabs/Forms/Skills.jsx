import React, { useReducer, useState } from 'react';
import AsyncSelect from './AsyncSelect';
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
  Input,
  Select,
  Grid,
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Stack,
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

const initialState = {
  lenguages: [],
  frameworks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET-LENGUAGE':
      if (state.lenguages.includes(action.lenguage)) return { ...state };
      return { ...state, lenguages: [...state.lenguages, action.lenguage] };

    case 'REMOVE-LENGUAGE':
      return {
        ...state,
        lenguages: state.lenguages.filter((item) => item !== action.lenguage),
      };

    case 'SET-FRAMEWORK':
      if (state.frameworks.includes(action.framework)) return { ...state };
      return { ...state, frameworks: [...state.frameworks, action.framework] };

    case 'REMOVE-FRAMEWORK':
      return {
        ...state,
        frameworks: state.frameworks.filter(
          (item) => item !== action.framework
        ),
      };

    default:
      break;
  }
};

const devAreas = [
  { area: 'Frontend', icon: DiJavascript1 },
  { area: 'Backend', icon: DiNodejsSmall },
  { area: 'Fullstack', icon: DiTerminal },
  { area: 'Devops', icon: DiBitbucket },
];

const Skills = ({ setFormState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errorMessage, setErrorMessage] = useState({});
  const notEmpty = (value) => value && value.toString().trim() !== '';

  const validateField = React.useCallback(
    (element) => {
      switch (element.name) {
        case 'educationLevel':
          if (notEmpty(element.value)) {
            setErrorMessage((current) => ({ ...current, [element.name]: '' }));
            return setFormState((current) => ({
              ...current,
              skills: {
                ...current.skills,
                [element.name]: { value: element.value, isValid: true },
              },
            }));
          }

          setFormState((current) => ({
            ...current,
            skills: {
              ...current.skills,
              [element.name]: { isValid: false },
            },
          }));

          return setErrorMessage((current) => ({
            ...current,
            [element.name]: 'Este campo es requerido.',
          }));

        case 'lenguages':
          if (notEmpty(element.value)) {
            setErrorMessage((current) => ({ ...current, [element.name]: '' }));
            dispatch({ type: 'SET-LENGUAGE', lenguage: element.value });
            setFormState((current) => {
              if (!current.skills.lenguages.value.includes(element.value)) {
                return {
                  ...current,
                  skills: {
                    ...current.skills,
                    [element.name]: {
                      value: [...current.skills.lenguages.value, element.value],
                      isValid: true,
                    },
                  },
                };
              }

              return { ...current };
            });
          }

          setFormState((current) => {
            return {
              ...current,
              skills: {
                ...current.skills,
                [element.name]: {
                  value: [...current.skills.lenguages.value],
                  isValid: false,
                },
              },
            };
          });

          return setErrorMessage((current) => ({
            ...current,
            [element.name]: 'Este campo es requerido.',
          }));

        case 'frameworks':
          if (notEmpty(element.value)) {
            setErrorMessage((current) => ({ ...current, [element.name]: '' }));
            dispatch({ type: 'SET-FRAMEWORK', framework: element.value });
            setFormState((current) => {
              if (!current.skills.frameworks.value.includes(element.value)) {
                return {
                  ...current,
                  skills: {
                    ...current.skills,
                    [element.name]: {
                      value: [
                        ...current.skills.frameworks.value,
                        element.value,
                      ],
                      isValid: true,
                    },
                  },
                };
              }

              return { ...current };
            });
          }

          setFormState((current) => {
            return {
              ...current,
              skills: {
                ...current.skills,
                [element.name]: {
                  value: [...current.skills.frameworks.value],
                  isValid: false,
                },
              },
            };
          });

          return setErrorMessage((current) => ({
            ...current,
            [element.name]: 'Este campo es requerido.',
          }));

        case 'devArea':
          if (notEmpty(element.value)) {
            setErrorMessage((current) => ({ ...current, [element.name]: '' }));
            // setErrorMessage((current) => ({...current, delete current[element.name]}));
            return setFormState((current) => ({
              ...current,
              skills: {
                ...current.skills,
                [element.name]: { value: element.value, isValid: true },
              },
            }));
          }

          setFormState((current) => ({
            ...current,
            skills: {
              ...current.skills,
              [element.name]: { isValid: false },
            },
          }));

          return setErrorMessage((current) => ({
            ...current,
            [element.name]: 'Este campo es requerido.',
          }));

        case 'bilingue':
          return setFormState((current) => ({
            ...current,
            skills: {
              ...current.skills,
              [element.name]: element.checked,
            },
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
          <FormLabel htmlFor="educationLevel" className="required">
            Nivel de formación
          </FormLabel>
          <Select
            name="educationLevel"
            placeholder="Seleccione..."
            onChange={(event) => validateField(event.target)}
            bg="imuko.secondaryGray">
            <option value="tecnico">Técnico</option>
            <option value="tecnologo">Tecnòlogo</option>
            <option value="profesional">Profesional</option>
            <option value="empirico">Empírico</option>
          </Select>
          <span className="error-message">{errorMessage.educationLevel}</span>
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
          <FormLabel htmlFor="bilingue" className="required">
            ¿Hablas inglés?
          </FormLabel>
          <Switch
            id="bilingue"
            color="orange"
            name="bilingue"
            onChange={(event) => validateField(event.target)}
          />
        </Box>

        <Box>
          <FormLabel className="required">Eres...</FormLabel>
          <RadioButtonGroup
            className="radioBtnsGroup"
            onChange={(val) => {
              const element = { name: 'devArea', value: val };
              validateField(element);
            }}>
            {devAreas.map(({ area, icon }, idx) => (
              <CustomRadioButton key={idx} leftIcon={icon} value={area}>
                {area}
              </CustomRadioButton>
            ))}
          </RadioButtonGroup>
        </Box>

        <Box>
          <FormLabel className="required">¿Que lenguajes dominas?</FormLabel>
          <AsyncSelect
            canShow
            onSelect={validateField}
            name="lenguages"
            url={`${process.env.REACT_APP_BACKEND_API_URL}/lenguage`}
          />
          <span className="error-message">{errorMessage.lenguages}</span>
          <Stack justify="center" spacing={2} mt={5}>
            {state.lenguages.map((lenguage, idx) => (
              <Tag
                key={idx}
                variant="solid"
                variantColor="orange"
                rounded="full"
                size="sm">
                <TagLabel>{lenguage}</TagLabel>
                <TagCloseButton
                  onClick={() =>
                    dispatch({ type: 'REMOVE-LENGUAGE', lenguage })
                  }
                />
              </Tag>
            ))}
          </Stack>
        </Box>

        <Box>
          <FormLabel htmlFor="otherLenguage">Otros lenguajes</FormLabel>
          <Input id="otherLenguage" placeholder="F#" bg="imuko.secondaryGray" />
        </Box>

        <Box>
          <FormLabel className="required">
            ¿Que framework o librería dominas?
          </FormLabel>
          <AsyncSelect
            canShow
            name="frameworks"
            onSelect={validateField}
            url={`${process.env.REACT_APP_BACKEND_API_URL}/frameworks`}
          />
          <Stack justify="center" spacing={2} mt={5}>
            {state.frameworks.map((framework, idx) => (
              <Tag
                key={idx}
                variant="solid"
                variantColor="orange"
                rounded="full"
                size="sm">
                <TagLabel>{framework}</TagLabel>
                <TagCloseButton
                  onClick={() =>
                    dispatch({ type: 'REMOVE-FRAMEWORK', framework })
                  }
                />
              </Tag>
            ))}
          </Stack>
        </Box>

        <Box>
          <FormLabel htmlFor="otherFrameworks">Otros Frameworks</FormLabel>
          <Input
            id="otherFrameworks"
            placeholder="Flask"
            bg="imuko.secondaryGray"
          />
        </Box>
      </Grid>
    </FormControl>
  );
};

export default Skills;
