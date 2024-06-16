

export const localeMessages = {
  en: {
    welcome: 'Welcome'
  },
  fr: {
    welcome: 'Bienvenue'
  },
  de: {
    welcome: 'Willkommen'
  },
  ja: {
    welcome: 'ようこそ'
  }
}

export function getMessages(lang: string) {
  const messages = localeMessages[lang || 'en']

  return (key:string) => {
    return messages[key]
  }
}
