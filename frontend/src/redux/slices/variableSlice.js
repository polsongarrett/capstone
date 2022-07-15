import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getVariableOptions = createAsyncThunk('variables/getOptions', async (variables) => {
  const response = await axios.get('/api/variables/' + variables.join('/'));
  return response;
});

export const variableSlice = createSlice({
  name: 'variable',
  initialState: {
    isError: false,
    selectedVarOpts: [],
    variableOptions: []
  },
  reducers: {
    changeSelectedVarOpts: (state, action) => {

      const index = state.selectedVarOpts.findIndex(object => object.variableType === action.payload.variableType) 
      if (action.payload.name === 'Random') {
        if (state.selectedVarOpts.length < 1) {
          return;
        }
        else {
          state.selectedVarOpts.splice(index, 1);
        }
      }
      else if (index === -1) {
        state.selectedVarOpts.push(action.payload);
      }

      else {
        state.selectedVarOpts[index] = action.payload;
      }
    },
    resetSelectedVarOpts: (state) => {
      state.selectedVarOpts = [];
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getVariableOptions.fulfilled, (state, action) => {
        state.variableOptions = action.payload.data;
        state.isError = false;
     })
     .addCase(getVariableOptions.rejected, (state) => {
        state.isError = true;
     })
  }
});

export const { changeSelectedVarOpts, resetSelectedVarOpts } = variableSlice.actions;
export default variableSlice.reducer;