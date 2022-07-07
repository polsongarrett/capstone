import { createSlice } from '@reduxjs/toolkit';

export const advTypeSlice = createSlice({
  name: 'advType',
  initialState: {
    advtype: 'Random'
  },
  reducers: {
    changeAdvType: (state, action) => {
      state.advtype = action.payload;
    }
  }
});

export const { changeAdvType } = advTypeSlice.actions;
export default advTypeSlice.reducer;