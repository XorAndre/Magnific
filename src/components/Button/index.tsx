import React from 'react';
import { ButtonWrapper, TextWrapper } from './styles';

import { variant3Types, sizeTypes } from 'src/styles/theme';

type ButtonProps = {
  label: string;
  size?: sizeTypes;
  variant?: variant3Types;
};

// eslint-disable-next-line react/display-name
const Button = React.forwardRef((props: any, ref: any) => {
  const { label, size, variant }: ButtonProps = props;
  return (
    <ButtonWrapper ref={ref} size={size} variant={variant} {...props}>
      {typeof label === 'string' ? <TextWrapper>{label}</TextWrapper> : label}
    </ButtonWrapper>
  );
});

Button.defaultProps = {
  size: 'sm' as sizeTypes,
  variant: 'primary' as variant3Types,
};

export default Button;
