import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai'

const rotateKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const RotatingDiv = styled.div`
  color: #fff;
  animation: ${rotateKeyframe} 1s linear infinite;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <RotatingDiv>
        <AiOutlineLoading size="30px" />
      </RotatingDiv>
    </LoadingContainer>
  )
};
