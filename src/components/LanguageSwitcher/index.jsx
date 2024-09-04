import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from '../Select';
import { useLocation, useNavigate } from 'react-router-dom';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const locale = i18n.language || 'en';
    if (
      [
        'en',
        'ar',
        'cs',
        'da',
        'de',
        'el',
        'es',
        'fr',
        'fi',
        'he',
        'hi',
        'hr',
        'hu',
        'id',
        'it',
        'ja',
        'ko',
        'ms',
        'nb',
        'nl',
        'pl',
        'pt',
        'ro',
        'ru',
        'sk',
        'sv',
        'th',
        'tr',
        'uk',
        'vi',
        'zu',
        'zh',
      ].includes(locale)
    ) {
      setLanguage(locale);
      i18n.changeLanguage(locale);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    if (location.pathname !== '/') {
      const currentPath = location.pathname.split('/');
      currentPath.splice(1, 1, lng);
      const newPath = currentPath.join('/');
      navigate(newPath, { replace: true });
    }
  };

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'ar', label: 'Arabic' },
    { value: 'cs', label: 'Czech' },
    { value: 'da', label: 'Danish' },
    { value: 'de', label: 'German' },
    { value: 'el', label: 'Greek' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'fi', label: 'Finnish' },
    { value: 'he', label: 'Hebrew' },
    { value: 'hi', label: 'Hindi' },
    { value: 'hr', label: 'Croatian' },
    { value: 'hu', label: 'Hungarian' },
    { value: 'id', label: 'Indonesian' },
    { value: 'it', label: 'Italian' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'ms', label: 'Malay' },
    { value: 'nb', label: 'Norwegian' },
    { value: 'nl', label: 'Dutch' },
    { value: 'pl', label: 'Polish' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ro', label: 'Romanian' },
    { value: 'ru', label: 'Russian' },
    { value: 'sk', label: 'Slovak' },
    { value: 'sv', label: 'Swedish' },
    { value: 'th', label: 'Thai' },
    { value: 'tr', label: 'Turkish' },
    { value: 'uk', label: 'Ukrainian' },
    { value: 'vi', label: 'Vietnamese' },
    { value: 'zu', label: 'Chinese (Simplified)' },
    { value: 'zh', label: 'Chinese (Traditional)' },
  ];

  return (
    <div className="p-2">
      <Select
        options={languageOptions}
        styles={{
          control: {
            borderRadius: '50px',
            padding: '12px 20px',
            border: '1px solid transparent',
            backgroundColor: 'rgb(241 245 249)',
            '&:hover': {
              border: '1px solid transparent',
            },
          },
          placeholder: {
            color: '#000',
          },
        }}
        className="!w-45"
        onChange={(option) => changeLanguage(option.value)}
        value={languageOptions.find((i) => i.value === language)}
      />
    </div>
  );
}

export default LanguageSwitcher;
