// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from '../services/api';
import { checkAuth } from './action';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.dispatch(checkAuth());
