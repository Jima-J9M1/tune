import  {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import songSlice from './slices/songSlice';
import userSlice from './slices/userSlice';
// import userWatcherSaga from './sagas/userWatcherSaga';
// import  userWatcherSaga  from './sagas/userWatcherSaga';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
      song:songSlice,
      user:userSlice,
    },
    middleware:[sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

export default store;