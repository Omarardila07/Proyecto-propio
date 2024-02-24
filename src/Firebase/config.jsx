import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Tu configuración de Firebase
const firebaseConfig = {
apiKey: "AIzaSyD3QZRfPcaTB_UxunO5S1IwH7QeQoA6iNk",
authDomain: "c-core.firebaseapp.com",
projectId: "c-core",
storageBucket: "c-core.appspot.com",
messagingSenderId: "57498223868",
appId: "1:57498223868:web:61c7275a01de4db28e0379",
measurementId: "G-1T393WS3WM"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

const db = getFirestore(app);

export { auth, firestore };