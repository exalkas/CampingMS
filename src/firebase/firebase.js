import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCDaVXv9Qylow3wlravGXsH2rZmSZJroMU",
  authDomain: "campingms-7ba0f.firebaseapp.com",
  databaseURL: "https://campingms-7ba0f.firebaseio.com",
  projectId: "campingms-7ba0f",
  storageBucket: "campingms-7ba0f.appspot.com",
  messagingSenderId: "348065241173"
};


// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


// const startAddClientDB = (clientData = {}) => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     const {
//       telephone = '6944205848',
//       email = 'alkas@alkas.gr',
//       name = 'alkas',
//       fathername = 'father',
//       surname = 'alkas sur',
//       address = 'rafa',
//       docID = 'AK 17654654',
//       plates = 'ZKE7024',
//       arrivalDate = '30/1/2018'
//     } = clientData;
//     const client = { telephone, email, name, fathername, surname, address, docID, plates, arrivalDate};

//     return database.ref(`clients`).push(client).then((ref) => {
//       dispatch(addClient({
//         id: ref.key,
//         ...client
//       }));
//     });
//   };
// };



export { firebase, googleAuthProvider, database as default };