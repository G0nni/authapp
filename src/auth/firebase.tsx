// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCLoiRUykyIGD-Dxo-cIBOgQVuNmbnBy7Y',
  authDomain: 'reactnativeauth-f945f.firebaseapp.com',
  projectId: 'reactnativeauth-f945f',
  storageBucket: 'reactnativeauth-f945f.appspot.com',
  messagingSenderId: '831884674061',
  appId: '1:831884674061:web:d725c1eafa64c3a5588144',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Exporter l'authentification Firebase
const authent = getAuth(app);

export default authent;
