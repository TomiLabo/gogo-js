import { fork, take } from 'redux-saga/effects'
import * as actions from '../actions/index'

const x: void = null

function* sampleSaga() {
  while (x === null) {
    const action = yield take('WIP')
  }
}

export default function* rootSaga() {
  yield fork(sampleSaga)
}
