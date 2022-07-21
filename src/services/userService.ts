import { addDoc, collection, DocumentData, getDocs, query, where } from 'firebase/firestore';

import { RegisterCredentialsDTO } from '@/features/auth';
import { db } from '@/utils/firebase';

const usersColRef = collection(db, 'users');

export const UserService = {
  createUser: async (data: RegisterCredentialsDTO, authId: string): Promise<DocumentData> => {
    return addDoc(usersColRef, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      authId,
      bio: '',
      role: 'USER',
    });
  },
  getUserByAuthId: async (authId: string): Promise<DocumentData> => {
    const querySnapshot = await getDocs(query(usersColRef, where('authId', '==', authId)));

    // eslint-disable-next-line no-debugger
    debugger;

    return new Promise((resolve) =>
      resolve({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() })
    );
  },
};
