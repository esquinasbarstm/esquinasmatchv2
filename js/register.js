import { db } from './firebase.js';
import {
  collection, query, where, getDocs, addDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Preencha todos os campos.");
    return;
  }

  try {
    const usuariosRef = collection(db, "usuarios");
    const q = query(usuariosRef, where("username", "==", username));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      alert("Nome de usuário já existe.");
      return;
    }

    const docRef = await addDoc(usuariosRef, {
      username,
      password,
      nome: "",
      descricao: "",
      fotoUrl: "",
      idade: null,
      genero: "",
      busca: ""
    });

    localStorage.setItem("userId", docRef.id);
    window.location.href = "profile.html";

  } catch (error) {
    console.error("Erro ao registrar:", error);
    alert("Erro ao criar conta. Tente novamente.");
  }
});
