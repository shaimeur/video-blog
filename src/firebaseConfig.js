// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9xIvhPccRhnL_V2sbMm_OK92RkjAiGPo",
  authDomain: "video-blog-bab01.firebaseapp.com",
  projectId: "video-blog-bab01",
  storageBucket: "video-blog-bab01.appspot.com",
  messagingSenderId: "134174003644",
  appId: "1:134174003644:web:6e066a21535c0dc3a71bb9",
  measurementId: "G-9W0YKRB01Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//initialize firebase auth
const auth = getAuth()


export { app, auth }