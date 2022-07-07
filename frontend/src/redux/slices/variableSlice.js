import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getVariableOptions = createAsyncThunk('variables/getOptions', async (variable) => {
  const response = await axios.get('/api/variables/' + variable);
  return response;
});

export const variableSlice = createSlice({
  name: 'variable',
  initialState: {

  },
  reducers: {

  },
  extraReducers: {

  }
});

export const {  } = variableSlice.actions;
export default variableSlice.reducer;