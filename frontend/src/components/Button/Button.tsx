import React from 'react';

import { ThemeColor } from '../../themes';
import { ButtonContainer, ButtonTextContainer } from './Button.styles';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ThemeColor;
}

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <ButtonTextContainer>
        {children}
      </ButtonTextContainer>
    </ButtonContainer>
  );
};
