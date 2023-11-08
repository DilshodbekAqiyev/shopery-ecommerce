import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../../locales/en/translation.json'
import translationRU from '../../locales/ru/translation.json'
import translationUZ from '../../locales/uz/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
