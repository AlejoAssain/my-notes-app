import { styled } from 'styled-components';

import { Props } from './Button.tsx';

export const ButtonContainer = styled.button<Props>`
  all: unset;
  background: ${(props) => {
    if (props.color) return props.theme.colors[props.color];
    return props.theme.colors.tertiary;
  }} none;
  color: ${props => props.theme.colors.text};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
    span {
      transform: scale(1.05);  
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.3);
    span {
      transform: scale(1.05);  
    }
    
  }

  &:active {
    span {
      transform: scale(0.95);  
    }
  }

  /* Disabled state */
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ButtonTextContainer = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
`;
