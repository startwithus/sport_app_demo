import { createSlice } from '@reduxjs/toolkit';
import themes from '../utils/theme/theme.json';

// Check if theme is stored in local storage, otherwise use default
const storedTheme = localStorage.getItem('theme');
const defaultThemeIndex = storedTheme ? parseInt(storedTheme) : 0;

const initialState = {
  themeIndex: defaultThemeIndex,
  themes: themes,
  currentTheme: themes[defaultThemeIndex].variables
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const themeIndex = action.payload;
      state.themeIndex = themeIndex;
      state.currentTheme = state.themes[themeIndex].variables;
      // Store selected theme index in local storage
      localStorage.setItem('theme', themeIndex);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;