import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("message").innerText = "Login successful!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
});

document.getElementById("register-btn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("message").innerText = "Account created and logged in!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
});
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

function showProductDetails(product) {
    alert(`You clicked on ${product}`);
}
