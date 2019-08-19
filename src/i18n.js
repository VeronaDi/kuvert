import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  uk: {
    translation: {
      home: "Головна",
      products: "Продукція",
      about: "Про нас",
      contacts: "Контакти",
      changeLang: {
        uk: "Eng",
      },
      request: "Створити запит",
      viewProducts: "Каталог продукції",
      learnMore: "Дізнатись більше",
      requestCall: "Замовити дзвінок",
      addressFactory: "Адреса фабрики",
      addressBranch: "Структурні підрозділи",
      addressRepresentative: "Представництво",
    },
  },
  en: {
    translation: {
      home: "Home",
      products: "Products",
      about: "About us",
      contacts: "Contacts",
      changeLang: {
        en: "Укр",
      },
      request: "Create request",
      viewProducts: "View products",
      learnMore: "Learn more",
      requestCall: "Request call",
      addressFactory: "Address of factory",
      addressBranch: "Offices",
      addressRepresentative: "Representative",
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "uk",
    fallbackLng: "uk",

    keySeparator: ".", // we do not use keys in form messages.welcome

    useLangKeyLayout: false,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
