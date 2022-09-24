import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './translation/es_US/translate.json'
import br from './translation/pt_BR/translate.json'
import es from './translation/es_ES/translate.json'
import fr from './translation/fr_FR/translate.json'

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    br: {
      translation: br,
    },
    es: {
      translation: es,
    },
    fr: {
      translation: fr,
    },
  },
  lng: localStorage.getItem('lng') || 'br',

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
})

export default i18next
