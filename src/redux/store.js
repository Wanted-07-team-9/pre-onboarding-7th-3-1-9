import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlicer/searchSlicer';

const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});

export default store;
