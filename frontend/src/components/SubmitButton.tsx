import { SubmitButtonComponent } from './styled-components';

type Props = {
  text: string;
}

export const SubmitButton = (props: Props) => {
  return (
    <SubmitButtonComponent 
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      type="submit"
    >
      {props.text || 'Submit'}
    </SubmitButtonComponent>
  )
}