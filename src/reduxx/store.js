// store.js
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import themeReducer from './themeSlice'
export default configureStore({
  reducer: {
    language: languageReducer,
    theme: themeReducer

  },
});
