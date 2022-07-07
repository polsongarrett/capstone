import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTemplateDescriptions = createAsyncThunk('templates/getTemplates', async (advType) => {
  const response = await axios.get('/api/templates/' + advType);
  return response;
});

export const advTemplateDescriptionSlice = createSlice({
  name: 'description',
  initialState: {
    description: 'Choose your adventure template or generate it randomly!',
    descriptions: ['Choose your adventure template or generate it randomly!']
  },
  reducers: {
    changeTemplateDescription: (state, action) => {
      state.description = state.descriptions[action.payload];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTemplateDescriptions.fulfilled, (state, action) => {
        const descriptions = action.payload.data.map(element => { return element.description });
        state.descriptions = ['Choose your adventure template or generate it randomly!', ...descriptions];
      });
  }
});

export const { changeTemplateDescription } = advTemplateDescriptionSlice.actions;
export default advTemplateDescriptionSlice.reducer;