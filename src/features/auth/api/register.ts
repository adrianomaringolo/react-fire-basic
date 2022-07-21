import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';

import { UserService } from '@/services/userService';
import { auth } from '@/utils/firebase';

import { UserResponse } from '../types';

export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const registerWithEmailAndPassword = async (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  const { email, password } = data;
  const credentials: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
  const userData: DocumentData = await UserService.createUser(data, credentials.user.uid);

  const response: UserResponse = {
    accessToken: await credentials.user.getIdToken(),
    user: userData.data,
  };

  return new Promise((resolve) => resolve(response));
};
