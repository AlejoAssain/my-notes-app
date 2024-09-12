import styled, { keyframes } from 'styled-components';

const rotateKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const RotatingDiv = styled.div`
  color: #fff;
  animation: ${rotateKeyframe} 1s linear infinite;
`;
