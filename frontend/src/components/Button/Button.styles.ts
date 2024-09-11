import { styled } from 'styled-components';

import { Props } from './Button.tsx';

export const ButtonContainer = styled.button<Props>`
  all: unset;
  background: ${(props) => {
    if (props.color) return props.theme.colors[props.color];
    return props.theme.colors.tertiary;
  }} none;
  color: ${props => props.theme.colors.text};
  padding: 4px 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`