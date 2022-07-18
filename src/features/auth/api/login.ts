import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

//import { axios } from '@/lib/axios';
import { auth } from '@/utils/firebase';

//import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO): Promise<UserCredential> => {
  const { email, password } = data;

  return signInWithEmailAndPassword(auth, email, password);

  //return axios.post('/auth/login', data);
};
