// Importa y configura Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Manejo del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Inicio de sesión con Firebase Authentication
  signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      // Inicio de sesión exitoso
      const user = userCredential.user;
      alert(`Bienvenido, ${user.email}!`);
      console.log("Usuario autenticado:", user);
    })
    .catch((error) => {
      // Manejo de errores
      console.error("Error al iniciar sesión:", error);
      document.getElementById('errorMessage').innerText = "Usuario o contraseña incorrectos.";
    });
});
