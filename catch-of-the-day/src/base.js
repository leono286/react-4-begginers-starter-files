import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBO5fGbgzjOTTxc8DWW-FeJ4wZ_hc1beH0",
  authDomain: "catch-of-the-day-leono286.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-leono286.firebaseio.com",
  projectId: "catch-of-the-day-leono286"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;