import { configureStore } from '@reduxjs/toolkit';
import advTemplateDescriptionReducer from './slices/advTemplateDescriptionSlice';
import advTemplateOptionsReducer from './slices/advTemplateOptionsSlice';
import advTypeReducer from './slices/advTypeSlice';
import advTypeDescriptionReducer from './slices/advTypeDescriptionSlice';

// reducers and slices explained: https://www.youtube.com/watch?v=iBUJVy8phqw
export const store = configureStore({
  reducer: {
    advTemplateDescription: advTemplateDescriptionReducer,
    advTemplateOptions: advTemplateOptionsReducer,
    advType: advTypeReducer,
    advTypeDescription: advTypeDescriptionReducer,
  },
});
