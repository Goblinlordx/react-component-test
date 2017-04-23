import {take, call} from 'redux-saga/effects';
import firebase from 'lib/firebase';
import T from 'action/type';
const {LOGIN_EMAIL} = T;

export function* loginEmailSaga() {
  while (true) {
    const {email, password} = yield take(LOGIN_EMAIL);
    try {
      yield call(firebase.auth().signInWithEmailAndPassword, email, password);
    } catch ({code}) {
      console.log(code);
    }
  }
}
