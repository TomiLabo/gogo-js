import { applyMiddleware, compose, createStore, Store} from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer, { IAppState } from '../reducers/index'
import rootSaga from '../sagas/index'

type LoggerOption = object

const opt: LoggerOption = {
  timestamp: true,
}
const logger: any = createLogger(opt)

function configureStore(): Store<IAppState> {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares: any = []
  middlewares.push(sagaMiddleware)
  middlewares.push(logger)
  const store = compose(applyMiddleware(...middlewares))(createStore)(reducer)
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore()
