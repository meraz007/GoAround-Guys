import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiGc5sDKg8J_QhgOkXBNkLfEgawC3uk4Q",
  authDomain: "blog-f81c4.firebaseapp.com",
  projectId: "blog-f81c4",
  storageBucket: "blog-f81c4.appspot.com",
  messagingSenderId: "20823211973",
  appId: "1:20823211973:web:4fc7e5f72e17bfbd9bd5ac"
};

// Initialize Firebase
const firebaseApp =firebase.initializeApp(firebaseConfig);
const timestamp =firebase.FieldValue.serverTimestamp;
export {timestamp}
export default firebaseApp.firestore();