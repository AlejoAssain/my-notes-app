import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai'


const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const RotatingDiv = styled(motion.div)`
  color: #fff;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <RotatingDiv
        animate={{
          rotate: "360deg"
        }}
        transition={{
          type: 'tween',
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
      >
        <AiOutlineLoading size="30px" />
      </RotatingDiv>
    </LoadingContainer>
  )
};
