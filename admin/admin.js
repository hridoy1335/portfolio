const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
}

// ADD PROJECT
function addProject() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const link = document.getElementById("link").value;

  db.collection("projects").add({
    title,
    description: desc,
    link
  });

  alert("Project Added!");
}

// LOAD PROJECTS
const list = document.getElementById("list");

db.collection("projects").onSnapshot(snapshot => {
  list.innerHTML = "";
  snapshot.forEach(doc => {
    const p = doc.data();
    list.innerHTML += `<p>${p.title}</p>`;
  });
});