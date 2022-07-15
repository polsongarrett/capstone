import { createSlice } from '@reduxjs/toolkit';

export const advTypeSlice = createSlice({
  name: 'advType',
  initialState: {
    advtype: 'Random',
    advTypes: [
      'Random',
      'Competition',
      'Crime',
      'Curse',
      'Disaster',
      'Exploration',
      'Monster',
      'Plague',
      'Protection',
      'War'
    ],
    description: 'Generate a plothook with a random adventure type!'
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