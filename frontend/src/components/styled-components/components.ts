import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalButton = styled(motion.a)`
  align-self: flex-end;
  justify-self: flex-end;
  background-color: #ff7979;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  color: ${({theme}) => theme.colors.secondaryText};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
`

export const SubmitButtonComponent = styled(motion.button)`
  all: unset;
  background: none;
  background-color: ${({theme}) => theme.colors.tertiary};
  color: ${({theme}) => theme.colors.text};
  border: none;
  border-radius: 10px;
  padding: 5px 10px; 
  margin: 0;
  outline: none;
  box-shadow: none;
  cursor: pointer;
`;