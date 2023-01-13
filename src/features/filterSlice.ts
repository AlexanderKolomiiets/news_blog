import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  query: string;
};

const initialState: State = {
  query: '',
};

const filterSlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    query: (state, action: PayloadAction<string>) => (
      { ...state, query: action.payload }
    ),
  },
});

export default filterSlice.reducer;
export const { actions } = filterSlice;
