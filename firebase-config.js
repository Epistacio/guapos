// Configuração da nuvem do Guapos (Firebase).
// Enquanto ficar null, o app funciona só neste aparelho: sem login e sem sincronizar.
// Para ligar a nuvem, troque o null pelo bloco "firebaseConfig" do seu projeto
// (Console do Firebase › Configurações do projeto › Seus apps › App da Web).
// Esses valores não são segredo: quem protege os dados são as regras do Firestore.
window.GUAPOS_FIREBASE = null;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbRNdvEonw9hK58MwbWESbe04pEo0etYs",
  authDomain: "guapo-bd882.firebaseapp.com",
  projectId: "guapo-bd882",
  storageBucket: "guapo-bd882.firebasestorage.app",
  messagingSenderId: "1072982200950",
  appId: "1:1072982200950:web:1d829912518292c51b4557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
