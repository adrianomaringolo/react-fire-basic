import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCybLOjrCi2A8iWV-LFUpMnJnPf2Gcv-VA',
  authDomain: 'doubleit-meta.firebaseapp.com',
  projectId: 'doubleit-meta',
  storageBucket: 'doubleit-meta.appspot.com',
  messagingSenderId: '627754025311',
  appId: '1:627754025311:web:cc5ce059b665fd7fed36ea',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth };
