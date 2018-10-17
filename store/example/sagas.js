import { takeLatest, call, put } from 'redux-saga/effects';

import { fetchWelcomeSuccess, fetchWelcomeError } from './actions';

import { fetchRequestExample } from '../../utils';

import { FETCH_WELCOME_DATA } from './constants';

function* fetchWelcomeData() {
  const { result, error } = yield call(fetchRequestExample, '/api/get', { method: 'GET' });

  if (error) {
    yield put(fetchWelcomeError(error));
  }

  yield put(fetchWelcomeSuccess(result));
}

function* exampleSagas() {
  return [
    yield takeLatest(FETCH_WELCOME_DATA, fetchWelcomeData),
  ];
}

export default exampleSagas;
