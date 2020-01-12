import {
  put,
  call,
  delay,
  takeEvery,
} from 'redux-saga/effects';

import {
  TNX_FETCH,
  TNX_FETCH_SUCCESS,
  TNX_FETCH_FAILURE,

  TNX_REFUND,
  TNX_REFUND_SUCCESS,
  TNX_REFUND_FAILURE,
} from './actions';

import * as api from '../../api';

export function* watchFetchTnx() {
  try {
    const tnxList = yield call(api.getTnx);
    yield put({ type: TNX_FETCH_SUCCESS, tnxList });
  } catch(e) {
    yield put({ type: TNX_FETCH_FAILURE, tnxList: [] });
  }
}

export function* watchRefundTnx({ tnx: { id } }) {
  try {
    // yield delay(600); just to show the spinner as local server is too fast,
    yield call(api.refundTnx, id);
    yield put({ type: TNX_REFUND_SUCCESS, error: false });
    yield put({ type: TNX_FETCH });
  } catch(e) {
    console.log(e.message);
    yield put({ type: TNX_REFUND_FAILURE, error: true });
  }
}

export default function* root() {
  yield takeEvery(TNX_FETCH, watchFetchTnx);
  yield takeEvery(TNX_REFUND, watchRefundTnx);
}