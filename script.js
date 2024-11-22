// Importa y configura Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

// Configuración de Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAWvLVI64C1LVC1gkbM38fMgrWQUZJr3b4",
    authDomain: "login-948d9.firebaseapp.com",
    projectId: "login-948d9",
    storageBucket: "login-948d9.firebasestorage.app",
    messagingSenderId: "1017210831314",
    appId: "1:1017210831314:web:a317cd78bb0320d008080b",
    measurementId: "G-4TNH10J8DX"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Inicio de sesión
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    const userRef = ref(database);
    try {
      // Buscar el usuario en la base de datos
      const snapshot = await get(child(userRef, 'users/' + username));
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.password === password) {
          alert('Inicio de sesión exitoso');
          // Redirigir o realizar otra acción
        } else {
          document.getElementById('errorMessage').textContent = 'Contraseña incorrecta.';
        }
      } else {
        document.getElementById('errorMessage').textContent = 'El usuario no existe.';
      }
    } catch (error) {
      document.getElementById('errorMessage').textContent = 'Error: ' + error.message;
    }
  }
});
</script>
