// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyAmkM4tGKwYQa8oL1eWzbDM-55w0QXtw7s',
  authDomain: 'psychology-kate.firebaseapp.com',
  projectId: 'psychology-kate',
  storageBucket: 'psychology-kate.appspot.com',
  messagingSenderId: '925739787766',
  appId: '1:925739787766:web:9e353e1314c8729c5ed3d7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
