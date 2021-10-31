import firebase from 'firebase'


const firebaseConfig = {
	apiKey: "AIzaSyBKV0HJftyQItMjyvXcHUcujQCm7tLxcmA",
	authDomain: "my-linked-in-clone.firebaseapp.com",
	projectId: "my-linked-in-clone",
	storageBucket: "my-linked-in-clone.appspot.com",
	messagingSenderId: "654558780124",
	appId: "1:654558780124:web:7c1748473e6bd6de8c7219"
};
      
 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export{db , auth }