import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import {
  getDatabase,
  onValue,
  ref,
  push,
  query,
  orderByChild,
  orderByKey, 
  child,
  set,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyBuFarTpznlBT1dpqlqhcc0j1JzxQ2yY3g",
  authDomain: "messengerchat-18f73.firebaseapp.com",
  databaseURL: "https://messengerchat-18f73-default-rtdb.firebaseio.com",
  projectId: "messengerchat-18f73",
  storageBucket: "messengerchat-18f73.appspot.com",
  messagingSenderId: "47677860316",
  appId: "1:47677860316:web:3090935d7e0f831b730719",
  measurementId: "G-38LZNVBH0J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const realDb = getDatabase(app);



const barBtn = document.querySelector('.bar');

barBtn.onclick = () => {
  document.querySelector('.barItems').classList.toggle('active')
}

const outUser = document.querySelector('#container');

async function drawContent() {
  const feItem = await collection(db, 'users');
  console.log(getDocs(feItem))
  getDocs(feItem).then((snap) => {
    snap.forEach((doc) => {
      let outHTML = '';
      outHTML = `<div class="second">
                    <img src="${doc.data().img}" alt="" class="imgContainer">
                    <span>
                        <h1 class="Location">${doc.data().name}</h1>
                        <h2 class="own">${doc.data().location}</h2>
                        <p class="note">${doc.data().descrip}Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugit saepe quibusdam minima consequatur dolorem minus delectus animi nesciunt eaque ducimus quod aliquid excepturi impedit commodi aut, maxime omnis. Laudantium?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste earum repellendus excepturi repellat eligendi, mollitia tenetur exercitationem quia voluptate error reprehenderit facere magni quas cumque porro! Nesciunt odit et quod.
                        </p>
                        <p class="howMany"><i class="fas fa-tree" id="treeIcon"></i>${doc.data().number}</p>
                    </span>
                  </div>`
        outUser.innerHTML += outHTML;
    })
  })
}

drawContent()