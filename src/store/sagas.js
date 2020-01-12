
import { spawn } from 'redux-saga/effects';
import tnxStatusSaga from '../modules/TransactionStatus/sagas';

export default function* registerSaga() {
  yield spawn(tnxStatusSaga);
}