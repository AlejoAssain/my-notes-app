import React from 'react';
import { ThemeColor } from '../../themes';
import { ButtonContainer } from './Button.styles';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ThemeColor;
}

export const Button: React.FC<Props> = (props) => {
  return (
    <ButtonContainer {...props}/>
  );
};
