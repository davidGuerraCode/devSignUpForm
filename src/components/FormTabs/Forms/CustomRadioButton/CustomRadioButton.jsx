import React, { forwardRef } from 'react';
import { Button } from '@chakra-ui/core';

const CustomRadioButton = forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;

  return (
    <Button
      ref={ref}
      variantColor={isChecked ? 'orange' : 'gray'}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  );
});

export default CustomRadioButton;
