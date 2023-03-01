// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARzPslHLceSVGeRBPH9Htxi_Vyo_1X7Ak",
  authDomain: "emedialrecords.firebaseapp.com",
  projectId: "emedialrecords",
  storageBucket: "emedialrecords.appspot.com",
  messagingSenderId: "1009590125213",
  appId: "1:1009590125213:web:622b1e1e615f8aa10e4a74",
  measurementId: "G-RG53QSDT9L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app)
export const storage=getStorage(app);