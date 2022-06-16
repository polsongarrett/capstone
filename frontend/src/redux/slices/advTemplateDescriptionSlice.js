import { createSlice } from '@reduxjs/toolkit'

export const advTemplateDescriptionSlice = createSlice({
  name: 'description',
  initialState: {
    description: 'Choose your adventure template or generate it randomly!'
  },
  reducers: {
    changeAdvTemplateDescription: (state) => {
      
    }
  }
});