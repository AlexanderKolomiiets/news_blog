import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../types/article';

const initialState: Article[] = [];

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    add: (articles, action: PayloadAction<Article[]>) => {
      action.payload.forEach((item => articles.push(item)));
    },
  },
});

export default articlesSlice.reducer;
export const { actions } = articlesSlice;
