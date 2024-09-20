import { LoginErrorContainer } from "./LoginError.styles";
import {useSession} from "../../../../providers";

export const LoginError = () => {
  const { error } = useSession();

  return <LoginErrorContainer>{error}</LoginErrorContainer>;

};
