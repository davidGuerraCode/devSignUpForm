import React from 'react';
import { Select } from '@chakra-ui/core';
import { useFetchData } from '../../../hooks';

const AsyncSelect = React.memo(
  ({ url, onSelect, canShow, name: selectName }) => {
    const [countries, loading] = useFetchData(url);

    return (
      <>
        <Select
          name={selectName}
          bg="imuko.secondaryGray"
          disabled={loading || !canShow}
          onChange={(event) => onSelect(event.target.value, event.target.name)}
          placeholder={loading ? 'Cargando...' : 'Seleccione...'}>
          {countries.length > 0 &&
            canShow &&
            countries.map(({ name, id }) => (
              <option
                key={id}
                value={selectName === 'country' ? id : name}
                style={{ textTransform: 'capitalize' }}>
                {name}
              </option>
            ))}
        </Select>
      </>
    );
  }
);

export default AsyncSelect;
