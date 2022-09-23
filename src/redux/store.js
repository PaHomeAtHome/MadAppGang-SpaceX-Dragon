import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { middleware } from './API/api';
// import { authorizationApi } from './API/api';
import { dragonsApi } from './API/api';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: [authorizationApi.reducerPath],
};

const reducers = combineReducers({
  [dragonsApi.reducerPath]: dragonsApi.reducer,
  // [authorizationApi.reducerPath]: authorizationApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      middleware,
      // authorizationApi.middleware
    ]),
});

export const persistor = persistStore(store);
