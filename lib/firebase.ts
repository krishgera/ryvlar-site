import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApu9wKRQsoQgKvKdBAwJDEuIN-Dy2zps8",
  authDomain: "ryvlar-194d9.firebaseapp.com",
  projectId: "ryvlar-194d9",
  storageBucket: "ryvlar-194d9.firebasestorage.app",
  messagingSenderId: "831213141085",
  appId: "1:831213141085:web:a86de5069a2838db1da1b4",
  measurementId: "G-HCS0LNLYXN",
  databaseURL: "https://ryvlar-194d9-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
import { FirebaseApp } from 'firebase/app';
import { Analytics } from 'firebase/analytics';

let firebaseApp: FirebaseApp | undefined;
let analytics: Analytics | undefined;

if (typeof window !== 'undefined') {
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
    
    // Initialize Analytics only in the browser and if supported
    isSupported().then(supported => {
      if (supported) {
        analytics = getAnalytics(firebaseApp);
      }
    });
  } else {
    firebaseApp = getApps()[0];
  }
}

// Initialize Realtime Database
export const db = typeof window !== 'undefined' ? getDatabase(firebaseApp) : null;

export const saveDemoRequest = async (demoData: {
  name: string;
  email: string;
  company: string;
  message: string;
  timestamp?: number;
}) => {
  if (!db) return null;
  
  try {
    const demoRequestsRef = ref(db, 'demoRequests');
    const newDemoRef = push(demoRequestsRef);
    
    await set(newDemoRef, {
      ...demoData,
      timestamp: Date.now()
    });
    
    return newDemoRef.key;
  } catch (error) {
    console.error('Error saving demo request:', error);
    throw error;
  }
};
