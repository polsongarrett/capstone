import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTemplates = createAsyncThunk('templates/getTemplates', async (advType) => {
  const response = await axios.get('/api/templates/' + advType);
  return response;
});

export const advTemplateOptionsSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: ['Random']
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTemplates.fulfilled, (state, action) => {
        const options = action.payload.data.map(element => { return element.name });
        state.templates = ['Random', ...options];
      });
  }
});

export const { changeAdvTemplateOptions } = advTemplateOptionsSlice.actions;
export default advTemplateOptionsSlice.reducer;