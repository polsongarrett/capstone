import { createSlice } from '@reduxjs/toolkit';

export const plothookSlice = createSlice({
  name: 'plothook',
  initialState: {
    plothook: ''
  },
  reducers: {
    changePlothook: (state, action) => {
      state.plothook = action.payload;
    },
    resetPlothook: (state) => {
      state.plothook = '';
    }
  }
});

export const { changePlothook, resetPlothook } = plothookSlice.actions;
export default plothookSlice.reducer;