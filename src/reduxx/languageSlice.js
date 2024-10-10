
import { createSlice } from '@reduxjs/toolkit';
import enTranslations from '../utils/language/english.json';
import hiTranslations from '../utils/language/hindi.json';

const translations = {
  en: enTranslations,
  hi: hiTranslations
};

const initialLanguage = localStorage.getItem('language') || 'en';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: initialLanguage,
    translations: translations[initialLanguage]
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      state.translations = translations[action.payload];
      localStorage.setItem('language', action.payload);
    }
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = state => state?.language?.language;
export const selectTranslations = state => state?.language?.translations;

export default languageSlice.reducer;
