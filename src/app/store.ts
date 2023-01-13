import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from '../features/articles';
import filterReduces from '../features/filter';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    filter: filterReduces,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
