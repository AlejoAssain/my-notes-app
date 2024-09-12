import { LoadingIcon } from '../Icons';
import { LoadingContainer, RotatingDiv } from './Loading.styles.ts';

export const Loading = () => {
  return (
    <LoadingContainer>
      <RotatingDiv>
        <LoadingIcon />
      </RotatingDiv>
    </LoadingContainer>
  )
};
