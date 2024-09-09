import { AxiosResponse } from 'axios';

import { SessionModel } from '#models/session.model.ts';
import { UserModel } from '#models/user.model.ts';
import { generateHeader, apiClientService } from './api-client.service';

export const getCurrentUser = async (token: string): Promise<UserModel> => {
  const response: AxiosResponse<UserModel> = await apiClientService.get(
    '/auth/me',
    generateHeader(token)
  );

  return response.data;
};

export const login = async (
  username: string,
  password: string,
): Promise<SessionModel> => {
  const requestBody = {
    username: username,
    password: password,
  };
  const response: AxiosResponse<SessionModel> = await apiClientService.post(
    '/auth/login',
    requestBody,
  );

  return response.data;
};
