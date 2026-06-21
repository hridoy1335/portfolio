const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const container = document.getElementById("projects");

db.collection("projects").onSnapshot(snapshot => {
  container.innerHTML = "";
  snapshot.forEach(doc => {
    const p = doc.data();

    container.innerHTML += `
      <div class="project">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">View Project</a>
      </div>
    `;
  });
});