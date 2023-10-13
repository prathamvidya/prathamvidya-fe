import { all, fork } from 'redux-saga/effects';
import authSaga from './auth.saga';
import uiSaga from './ui.saga';

export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(uiSaga)]);
}
