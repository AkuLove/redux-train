import { configureStore } from '@reduxjs/toolkit';
import { catalogApi } from '../services/catalogApi';

// const reducers = combineReducers({});

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
