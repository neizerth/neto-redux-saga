import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import * as reducer from './features'
import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = configureStore({
  reducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;