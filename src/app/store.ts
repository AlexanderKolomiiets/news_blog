import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from '../features/articlesSlice';
import filterReduces from '../features/filterSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    filter: filterReduces,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
