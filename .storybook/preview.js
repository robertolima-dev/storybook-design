// import { i18n } from './i18n.js'

export const parameters = {
  // i18n,
  // locale: 'pt-BR',
  // locales: {
  //   'pt-BR': 'Portuguese (BR)',
  //   'en-US': 'English',
  //   es: 'Spanish'
  // },

  backgrounds: {
    default: 'dark'
  },

  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
