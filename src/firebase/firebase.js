// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, collection } from "firebase/firestore"; //use for connect with firestore or DB

// Your web app's Firebase configuration
const firebaseConfig = {
   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//here we connect with DB / Firestore
export const db = getFirestore(app); //here we access the DB
export const moviesRef = collection(db, "movies"); // here set collection like mongodb, add database, and movies(collection name which I created)
export const reviewsRef = collection(db, "reviews"); // here set collection for 'reviews', add database


export default app;
