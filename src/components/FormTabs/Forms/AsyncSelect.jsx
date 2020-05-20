import React from 'react';
import { FormLabel, Select } from '@chakra-ui/core';
import { useFetchData } from '../../../hooks';

const AsyncSelect = ({ url, onSelect, canShow, label, id }) => {
  const [countries, loading] = useFetchData(url);

  return (
    <>
      <FormLabel htmlFor="country">{label}</FormLabel>
      <Select
        id={id}
        bg="imuko.secondaryGray"
        disabled={loading || !canShow}
        onChange={(event) => onSelect(event.target.value, event.target.id)}
        placeholder={loading ? 'Cargando...' : 'Seleccione...'}>
        {countries.length > 0 &&
          canShow &&
          countries.map(({ name, id }) => (
            <option key={id} value={id} style={{ textTransform: 'capitalize' }}>
              {name}
            </option>
          ))}
      </Select>
    </>
  );
};

export default AsyncSelect;
