import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import allDataReducer from '../features/allData';
import controlsReducer from '../features/controls';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    allData: allDataReducer,
    controls: controlsReducer
  },
});
