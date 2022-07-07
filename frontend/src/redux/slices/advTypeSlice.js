import { createSlice } from '@reduxjs/toolkit';

export const advTypeSlice = createSlice({
  name: 'advType',
  initialState: {
    advtype: 'Random',
    description: 'Choose your adventure type or generate it randomly!'
  },
  reducers: {
    changeAdvType: (state, action) => {
      state.advtype = action.payload;
    },
    changeAdvTypeDescription: (state, action) => {
      state.description = action.payload;
    }
  }
});

export const { changeAdvType, changeAdvTypeDescription } = advTypeSlice.actions;
export default advTypeSlice.reducer;