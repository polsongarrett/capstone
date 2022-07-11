import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTemplates = createAsyncThunk('templates/getTemplates', async (advType) => {
  const response = await axios.get('/api/templates/' + advType);
  return response;
});

export const templateSlice = createSlice({
  name: 'template',
  initialState: {
    option: '',
    options: ['Random'],
    description: 'Choose your adventure template or generate it randomly!',
    descriptions: ['Choose your adventure template or generate it randomly!'],
    variables: []
  },
  reducers: {
    changeTemplateDescription: (state, action) => {
      state.description = state.descriptions[action.payload];
    },
    resetTemplateOption: (state, action) => {
      state.option = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTemplates.fulfilled, (state, action) => {
      const options = action.payload.data.map(element => { return element.name });
      const descriptions = action.payload.data.map(element => { return element.description });
      if (action.payload.data.length < 1) {
        state.variables = [];
      }
      else {
        action.payload.data.forEach(template => { 
          template.variables.forEach(variable => {
            if (!state.variables.includes(variable)) {
              state.variables.push(variable);
            }
          });
        });
      }
      
      state.options = ['Random', ...options];
      state.descriptions = ['Choose your adventure template or generate it randomly!', ...descriptions];
    });
  }
});

export const { changeTemplateDescription, resetTemplateOption } = templateSlice.actions;
export default templateSlice.reducer;