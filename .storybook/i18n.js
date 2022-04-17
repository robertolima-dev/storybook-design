import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const supportedLngs = ['pt-BR', 'en-US', 'es']
const ns = ['common']

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'common',
    ns,
    supportedLngs
  })

i18n.addResourceBundle('pt-BR', 'common', require('../public/locales/pt-BR.json'))
i18n.addResourceBundle('en-US', 'common', require('../public/locales/en-US.json'))
i18n.addResourceBundle('es', 'common', require('../public/locales/es.json'))

export { i18n }
