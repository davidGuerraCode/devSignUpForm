import React, { forwardRef } from 'react';
import { Button } from '@chakra-ui/core';

const CustomRadioButton = forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, onDevAreaChange, ...rest } = props;

  return (
    <Button
      ref={ref}
      bg={isChecked ? 'imuko.mainBlue' : 'imuko.secondaryGray'}
      color={isChecked ? '#fff' : '#455865'}
      _hover={{ bg: 'imuko.mainBlue', color: '#fff' }}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  );
});

export default CustomRadioButton;
