import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    location: {
      wilderness: true,
      urban: true
    },
    themes: {
      fantasy: true,
      scifi: false,
      western: false,
    }
  },
  reducers: {
    changeThemeFilters: (state, action) => {
      state.themes = action.payload;
    },
    changeLocationFilters: (state, action) => {
      state.location = action.payload;
    }
  }
});

export const { changeThemeFilters, changeLocationFilters } = filterSlice.actions;
export default filterSlice.reducer;