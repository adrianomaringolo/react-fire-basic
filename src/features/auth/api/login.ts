import { signInWithEmailAndPassword } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';

import { UserService } from '@/services/userService';
import { auth } from '@/utils/firebase';

import { AuthUser, UserResponse } from '../types';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = async (
  data: LoginCredentialsDTO
): Promise<UserResponse> => {
  const { email, password } = data;

  const credentials = await signInWithEmailAndPassword(auth, email, password);
  // eslint-disable-next-line no-debugger
  debugger;
  const userData: DocumentData = await UserService.getUserByAuthId(credentials.user.uid);

  const response: UserResponse = {
    accessToken: await credentials.user.getIdToken(),
    user: userData as AuthUser,
  };

  return new Promise((resolve) => resolve(response));
};
