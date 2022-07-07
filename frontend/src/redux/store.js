import { configureStore } from '@reduxjs/toolkit';
import advTemplateReducer from './slices/templateSlice';
import advTypeReducer from './slices/advTypeSlice';
import variableReducer from './slices/variableSlice';

// reducers and slices explained: https://www.youtube.com/watch?v=iBUJVy8phqw
export const store = configureStore({
  reducer: {
    advTemplate: advTemplateReducer,
    advType: advTypeReducer,
    advVariable: variableReducer
  },
});
