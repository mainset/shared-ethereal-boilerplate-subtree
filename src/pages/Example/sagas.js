import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchRequest } from './utils';

import { fetchWelcomeSuccess, fetchWelcomeError } from './actions';

import { FETCH_WELCOME_DATA } from './constants';

function* fetchWelcomeData() {
  const { result, error } = yield call(fetchRequest, '/get', { method: 'GET' });

  if (error) {
    yield put(fetchWelcomeError(error));
  }

  yield put(fetchWelcomeSuccess(result));
}

export default function* appSagas() {
  return [
    yield takeLatest(FETCH_WELCOME_DATA, fetchWelcomeData),
    yield takeLatest('FETCH_WELCOME_DATA_TWO', fetchWelcomeData)
  ];
}
