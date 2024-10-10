import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './languages-converter.css';

import { selectTranslations, setLanguage, selectLanguage } from '../../reduxx/languageSlice.js';
const LanguageSelector = () => {
const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);
  const translations = useSelector(selectTranslations);

  const handleChangeLanguage = (e) => {
    const language = e.target.value;
    dispatch(setLanguage(language));
  };

  return (
    <div className='languages-converter'>
      <select value={currentLanguage} onChange={handleChangeLanguage}>
        <option value="en">{translations['language.english']}</option>
        <option value="hi">{translations['language.hindi']}</option>
      </select>
    </div>
  
  );
};

export default LanguageSelector;
