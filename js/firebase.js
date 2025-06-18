// public/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJj4oqF5cszA_xlaDp_zqW3UYs5LSHVqI",
  authDomain: "esquina-s-match-v2.firebaseapp.com",
  projectId: "esquina-s-match-v2",
  storageBucket: "esquina-s-match-v2.firebasestorage.app", // <-- CORRIGIDO AQUI!
  messagingSenderId: "350201664134",
  appId: "1:350201664134:web:ffe41b6e166bda31907707"
  // ... outras configurações
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
