// src/firebase-config.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import { environment } from './environments/environment'; // Adjust the path if necessary



const firebaseConfig = {
  apiKey: "AIzaSyDsnHmRhNCUwJZ_VavjbA9g8XXs-x5IonI",
  authDomain: "seg-3102-lab-5-4fbe9.firebaseapp.com",
  projectId: "seg-3102-lab-5-4fbe9",
  storageBucket: "seg-3102-lab-5-4fbe9.appspot.com",
  messagingSenderId: "934841099986",
  appId: "1:934841099986:web:52f0e78ea20c5605776f0b",
  measurementId: "G-RHZQB1WDE6"
};

const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };