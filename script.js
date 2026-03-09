const firebaseConfig = {
  apiKey: "AIzaSyCE7RsYIyLZB_JDkzZapB-XgYzixfFFh9E",
  authDomain: "instagram-viewer-d1b90.firebaseapp.com",
  databaseURL: "https://instagram-viewer-d1b90-default-rtdb.firebaseio.com",
  projectId: "instagram-viewer-d1b90",
  storageBucket: "instagram-viewer-d1b90.firebasestorage.app",
  messagingSenderId: "558751573053",
  appId: "1:558751573053:web:03ecc66967414f2a0db654",
  measurementId: "G-F75CHB90YR"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const reelsContainer = document.querySelector(".reelsContainer");

db.ref("reels").on("value", (snapshot) => {

  reelsContainer.innerHTML = "";

  snapshot.forEach((child) => {

    let reel = child.val();

    let html = `
    <div class="reel">

      <video autoplay loop muted controls>
        <source src="${reel.video}">
      </video>

      <div class="overlay">

        <div class="info">
          <h3>@${reel.username}</h3>
          <p>${reel.caption}</p>
        </div>

      </div>

    </div>
    `;

    reelsContainer.innerHTML += html;

  });

});
