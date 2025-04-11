import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1814dVCA2K5OqaYb1v2js4vzATs8LY9M",
  authDomain: "topsack-4254e.firebaseapp.com",
  projectId: "topsack-4254e",
  storageBucket: "topsack-4254e.firebasestorage.app",
  messagingSenderId: "488757070284",
  appId: "1:488757070284:web:d8a3f54c92fd1fd5837569",
  measurementId: "G-01WTDJHK2J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("user-info").innerText = "Logged in as: " + user.email;
  } else {
    window.location.href = "login.html";
  }
});

document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
});
