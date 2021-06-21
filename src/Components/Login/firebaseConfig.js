import firebase from "firebase";
import "firebase/auth";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCoqqktFKNwOA1lW1UjvpKibpOZ52HSXe4",
  authDomain: "online-furniture-shop-a46e2.firebaseapp.com",
  projectId: "online-furniture-shop-a46e2",
  storageBucket: "online-furniture-shop-a46e2.appspot.com",
  messagingSenderId: "349938496291",
  appId: "1:349938496291:web:d9e5f08dfec02a417d1296"
};
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
} 
 
const auth=firebase.auth();
const googleProvider=new firebase.auth.GoogleAuthProvider();


export { auth, googleProvider};