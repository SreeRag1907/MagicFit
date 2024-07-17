import { createSlice } from '@reduxjs/toolkit';

const magicFitSlice = createSlice({
  name: 'magicFit',
  initialState: [],
  reducers: {
    addToMagicFit: (state, action) => {
      state.push(action.payload); // Add product to MagicFit
    },
    removeFromMagicFit: (state, action) => {
      return state.filter(item => item.id !== action.payload); // Remove product from MagicFit
    },
  },
});

export const { addToMagicFit, removeFromMagicFit } = magicFitSlice.actions;
export default magicFitSlice.reducer;
