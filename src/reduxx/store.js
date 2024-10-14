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

export const formateTime = (dateString) => {
  const parsedDate = new Date(dateString);
  return parsedDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',

  });
}
