import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTemplates = createAsyncThunk('templates/getTemplates', async (advType) => {
  const response = await axios.get('/api/templates/' + advType);
  return response;
});

export const templateSlice = createSlice({
  name: 'template',
  initialState: {
    description: 'Generate a plothook with a random template! (To select a template, first select an adventure type)',
    descriptions: ['Generate a plothook with a random template! (To select a template, first select an adventure type)'],
    randomTemplate: {},
    template: {},
    templateAdvType: 'Random',
    templates: []
  },
  reducers: {
    changeTemplate: (state, action) => {
      if (action.payload <= 0) {
        state.template = {};
      }
      else {
        state.template = state.templates[action.payload - 1];
      }
    },
    changeTemplateDescription: (state, action) => {
      state.description = state.descriptions[action.payload];
    },
    setRandomTemplate: (state, action) => {
      state.randomTemplate = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTemplates.fulfilled, (state, action) => {

      const templates = action.payload.data;
      const descriptions = templates.map(element => { return element.description });
      const templateAdvType = templates.length < 1 ? 'Random' : templates[0].advType;
      
      state.template = {};
      state.templateAdvType = templateAdvType;
      state.templates = templates;
      state.descriptions = ['Generate a plothook with a random template! (To select a template, first select an adventure type)', ...descriptions];
    });
  }
});

export const { changeTemplate, changeTemplateDescription, setRandomTemplate } = templateSlice.actions;
export default templateSlice.reducer;