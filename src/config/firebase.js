import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore();
