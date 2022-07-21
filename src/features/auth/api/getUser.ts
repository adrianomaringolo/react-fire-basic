import { onAuthStateChanged } from 'firebase/auth';

import { UserService } from '@/services/userService';
import { auth } from '@/utils/firebase';

import { AuthUser } from '../types';

export const getUser = async (): Promise<AuthUser> => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // eslint-disable-next-line no-debugger
        debugger;
        const userData: AuthUser = (await UserService.getUserByAuthId(user.uid)) as AuthUser;
        resolve(userData);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  });
};
