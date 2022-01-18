import { configureStore } from '@reduxjs/toolkit';
import dataControlsReducer from '../features/dataControls';

export const store = configureStore({
  reducer: {
    dataControls: dataControlsReducer,
  },
});
