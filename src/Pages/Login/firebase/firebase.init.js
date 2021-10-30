import { initializeApp } from "firebase/app";
import firebaseConfiq from "./firebase.confiq";

const firebaseInit = () =>{
    initializeApp(firebaseConfiq)
}
export default firebaseInit;