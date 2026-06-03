// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  projectId: "starz-wealth-app-2026",
  appId: "1:642942907860:web:c60a503faf69ae934c5241",
  storageBucket: "starz-wealth-app-2026.firebasestorage.app",
  apiKey: "AIzaSyAI0d-HEWSG7e2-kLqwc5c5G7JgZmV9nq0",
  authDomain: "starz-wealth-app-2026.firebaseapp.com",
  messagingSenderId: "642942907860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
