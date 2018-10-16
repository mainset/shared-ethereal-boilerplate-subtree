import { fork, all } from 'redux-saga/effects';

import { exampleSagas } from 'store';

const sagas = [
  exampleSagas,
  // NOTE: put other app sagas here
];

function* globalSaga() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all(globalSagasForks);
}

export default globalSaga;
