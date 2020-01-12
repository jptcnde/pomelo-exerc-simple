import createSagaMiddleware from 'redux-saga';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import rootSaga from './sagas';
import tnxStatusReducer, { initialState } from '../modules/TransactionStatus/reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  createLogger(),
  sagaMiddleware,
];

const store = createStore(tnxStatusReducer, initialState, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);

export default store;