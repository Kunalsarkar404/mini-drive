// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAZNELzNTjUYoXDOTyBMYQCpNq0lmTLSSk",
    authDomain: "mini-drive-4ee94.firebaseapp.com",
    databaseURL: "https://mini-drive-4ee94-default-rtdb.firebaseio.com",
    projectId: "mini-drive-4ee94",
    storageBucket: "mini-drive-4ee94.appspot.com",
    messagingSenderId: "848794920221",
    appId: "1:848794920221:web:3c60dc96feb08ef100adf4",
    measurementId: "G-YYPR2HRFPE"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export const storage = app.storage()
  export const database = {
    formatDoc: (doc) =>{
        return { id: doc.id, ...doc.data()}
    },
    folders: firebase.collection("folders"),
    files: firebase.collection("files")
  }

  export const getCurrentTimestamp= firebase.firestore.FieldValue.
  serverTimestamp()

  export default app;