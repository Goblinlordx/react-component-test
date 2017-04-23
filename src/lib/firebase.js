import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCyFZJQwySGUVQTyn93Q-OQklJxDr3x72s',
  authDomain: 'bmbaldivia.firebaseapp.com',
  databaseURL: 'https://bmbaldivia.firebaseio.com',
  projectId: 'bmbaldivia',
  storageBucket: 'bmbaldivia.appspot.com',
  messagingSenderId: '113875014501',
};

firebase.initializeApp(config);

export default firebase;
