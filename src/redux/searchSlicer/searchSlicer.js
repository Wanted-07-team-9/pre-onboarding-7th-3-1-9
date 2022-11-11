import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  condition: '',
  isLoading: false,
  items: [],
};

export const SearchSlice = createSlice({
  name: 'searchItem',
  initialState,
  reducers: {
    setCondition: (state, action) => {
      state.condition = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

console.log(SearchSlice);

export const { setCondition, setIsLoading, setItems } = SearchSlice.actions;

export default SearchSlice.reducer;
