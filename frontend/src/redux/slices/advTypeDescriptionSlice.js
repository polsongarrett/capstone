import { createSlice } from '@reduxjs/toolkit';

export const advTypeDescriptionSlice = createSlice({
  name: 'description',
  initialState: {
    description: 'Choose your adventure type or generate it randomly!'
  },
  reducers: {
    changeAdvTypeDescription: (state, action) => {
      state.description = action.payload;
    }
  }
});

export const { changeAdvTypeDescription } = advTypeDescriptionSlice.actions;
export default advTypeDescriptionSlice.reducer;