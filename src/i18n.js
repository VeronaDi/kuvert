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
      calculate: "Прорахувати",
      contacts: "Контакти",
      contactUs: "Зв'яжіться з нами",
      changeLang: {
        uk: "Eng",
      },
      request: "Створити запит",
      viewProducts: "Каталог продукції",
      learnMore: "Дізнатись більше",
      requestCall: "Замовити дзвінок",
      addressFactory: "Адреса фабрики",
      addressBranch: "Структурні підрозділи",
      contactBranchKyiv:
        "м. Київ, вул. Сім'ї Сосніних, 9 (Електротехнічний завод)",
      contactBranchDnipro: "м. Дніпро, вул. Акінфієва, 18",
      contactBranchKharkiv: "м. Харків, вул. Плеханівська, 117",
      addressRepresentative: "Представництво",
      contactFactory: "м.Івано-Франківськ вул.І.Макуха, 6",
      contactRepresentative: "Укрiнвестприлад м.Львів вул. Зелена 251",
      ourClients: "Наші клієнти",
      phone: "Тел.",
    },
  },
  en: {
    translation: {
      home: "Home",
      products: "Products",
      about: "About us",
      calculate: "Calculate",
      contacts: "Contacts",
      contactUs: "Contact us",
      changeLang: {
        en: "Укр",
      },
      request: "Create request",
      viewProducts: "View products",
      learnMore: "Learn more",
      requestCall: "Request call",
      addressFactory: "Address of factory",
      addressBranch: "Offices",
      contactBranchKyiv:
        "Kyiv, Simji Sosninykh str. 9 (Electrotechnical factory)",
      contactBranchDnipro: "Dnipro, Akinfeeva str. 18",
      contactBranchKharkiv: "Kharkiv, Plehanivska str. 117",
      addressRepresentative: "Representative",
      contactFactory: "Ivano-Frankivsk Makuha str. 6",
      contactRepresentative: "Ukrinvestprylad Lviv Zelena str. 251",
      ourClients: "Our clients",
      phone: "Phone",
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
