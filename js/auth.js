// Firebase v10 SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHRmtPI-FcsH2VXsbnXFhedv4e5ay-xco",
  authDomain: "simpzone-c261f.firebaseapp.com",
  projectId: "simpzone-c261f",
  storageBucket: "simpzone-c261f.appspot.com",
  messagingSenderId: "112722316822",
  appId: "1:112722316822:web:40f25acde13d98821f2f37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// HTML elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const messageEl = document.getElementById("message");

// Login event
loginBtn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((userCredential) => {
      localStorage.setItem("user", userCredential.user.email);
      window.location.href = "index.html"; // redirect after login
    })
    .catch((error) => {
      messageEl.textContent = "Login failed: " + error.message;
    });
});

// Register event
registerBtn.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const userDoc = doc(db, "users", user.uid);
      await setDoc(userDoc, {
        email: user.email,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem("user", user.email);
      window.location.href = "create-profile.html"; // go to profile setup
    })
    .catch((error) => {
      messageEl.textContent = "Register failed: " + error.message;
    });
});
