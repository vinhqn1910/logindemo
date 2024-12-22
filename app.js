// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWIvsZeEpCDZ4gCA_4OWgJTHChjDMFOB0",
    authDomain: "demowebsite-f6e39.firebaseapp.com",
    projectId: "demowebsite-f6e39",
    storageBucket: "demowebsite-f6e39.firebasestorage.app",
    messagingSenderId: "788668288815",
    appId: "1:788668288815:web:6804f9438d59256d599bda"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Login Form Submission
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login success
        alert("Login successful!");
        window.location.href = "https://vinhqn1910.github.io/demoweb/index.html";

      })
      .catch((error) => {
        // Handle Errors
        alert(error.message);
      });
  });
  
  // Handle Signup Link
  document.getElementById("signupLink").addEventListener("click", () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter a password:");
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Signup successful!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  