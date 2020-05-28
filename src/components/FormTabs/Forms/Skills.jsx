import React, { useReducer } from 'react';
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

const Skills = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormControl m={8}>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={8}>
        <Box>
          <FormLabel htmlFor="educationLevel" className="required">
            Nivel de formación
          </FormLabel>
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
          <FormLabel htmlFor="bilingue" className="required">
            ¿Hablas inglés?
          </FormLabel>
          <Switch id="bilingue" color="orange" />
        </Box>

        <Box>
          <FormLabel className="required">Eres...</FormLabel>
          <RadioButtonGroup className="radioBtnsGroup">
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
          </RadioButtonGroup>
        </Box>

        <Box>
          <FormLabel className="required">¿Que lenguajes dominas?</FormLabel>
          <AsyncSelect
            canShow
            onSelect={(value, id) =>
              dispatch({ type: 'SET-LENGUAGE', lenguage: value })
            }
            url={`${process.env.REACT_APP_BACKEND_API_URL}/lenguage`}
            idElement="lenguages"
          />
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
            onSelect={(value, id) =>
              dispatch({ type: 'SET-FRAMEWORK', framework: value })
            }
            url={`${process.env.REACT_APP_BACKEND_API_URL}/frameworks`}
            idElement="frameworks"
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
