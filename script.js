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
</script>
