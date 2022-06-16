import { configureStore } from '@reduxjs/toolkit';
import advTypeDescriptionReducer from './slices/advTypeDescriptionSlice';

// reducers and slices explained: https://www.youtube.com/watch?v=iBUJVy8phqw
export const store = configureStore({
  reducer: {
    advTypeDescription: advTypeDescriptionReducer
  },
});
