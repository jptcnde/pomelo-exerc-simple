import { put, take, select } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import {
  watchFetchTnx,
  watchRefundTnx,
} from './sagas';

import {
  TNX_FETCH_SUCCESS,
  TNX_REFUND_SUCCESS,

} from './actions';

describe('Transaction Status Sagas', () => {
  test('it should successfully fetch tnx list', () => {
    const fetchTnxGen = cloneableGenerator(watchFetchTnx)();
    fetchTnxGen.next();
    const { type } = fetchTnxGen.next().value.payload.action;
    expect(type).toBe(TNX_FETCH_SUCCESS);
  });

  test('it should successfully refund a tnx', () => {
    const refundTnxGen = cloneableGenerator(watchRefundTnx.bind(null, { tnx: { id: '' }}))();
    refundTnxGen.next();
    const { type } = refundTnxGen.next().value.payload.action;
    expect(type).toBe(TNX_REFUND_SUCCESS);
  });
});