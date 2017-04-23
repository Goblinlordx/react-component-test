import {fork} from 'redux-saga/effects';
import {loginEmailSaga} from './loginEmail';

export default function*() {
  yield [fork(loginEmailSaga)];
}
