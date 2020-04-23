import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  uk: {
    translation: {
      acquainted: "Давайте познайомимось",
      home: "Головна",
      products: "Продукція",
      about: "Про нас",
      calculate: "Прорахувати",
      contacts: "Контакти",
      contactUs: "Зв'яжіться з нами",
      changeLang: {
        uk: "Eng",
      },
      envelopes: "Конверти",
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
      contactBranchLviv: "м. Львів, вул. Зелена, 251",
      contactFactory: "м.Івано-Франківськ вул.І.Макуха, 6",
      contactRepresentative: "Укрiнвестприлад м.Львів вул. Зелена 251",
      ourClients: "Наші клієнти",
      phone: "Тел.",
      statistic: "Важлива статистика",
      statisticFact: "Корисні та значні дані про нашу фабрику",
      send: "Надіслати",
      hearingLoss: "10% працівників нашої фабрики —  це люди з вадами слуху",
      ourHistory: "Наша історія",
      historyP1:
        "Фабрика конвертів «Куверт-Україна» — частина найбільшого в Європі концерну з виробництва конвертів «Mayer-Kuvert-network GmbH» і найбільший виробник конвертів в Україні з 1999 року. Щороку ми виготовляємо більше 250 млн. конвертів завдяки високоякісному машинному парку фабрики. Співпраця з провідними європейськими виробниками паперу дає змогу забезпечувати виробництво гарантовано досконалою сировиною. Ми наполегливо працюємо над удосконаленням усіх процесів для того, щоб залишити екологічний слід якомога менший, тому на фабриці діє технологія безвідходного виробництва.",
      historyP2:
        "«Куверт-Україна» пропонує споживачам найширший асортимент поштових конвертів та пакетів, унікальні запатентовані продукти та інновації в галузі рекламного конверта, постійні складські запаси та сертифікований контроль якості.",
      visitMayer: "Відвідати вебсайт “Mayer-Kuvert-network GmbH”",
      missionTitle: "Наша місія",
      mission:
        "Ми лідери галузі та приймаємо будь-які виклики, щоб забезпечувати клієнтів відмінною якістю роботи і найкращим результатом, можливим завдяки потужному технічному і технологічному виробництву, професіоналізму і злагодженій роботі команди, турботою про навколишнє довкілля при виготовленні продукції і можливості її переробки.",
      certificate: "Сертифікати і нагороди",
      participants: "Ми є частиною",
      requestType: "Тип запиту",
      requestOrderCreate: "Створення запиту",
      requestPersonal: "Контактні дані",
      chooseType: "Оберіть тип запиту",
      basicOrder: "Стандартний запит",
      printedOrder: "Запит друку",
      individualOrder: "Індивідуальний запит",
      basicOrderText:
        "Якщо Ви бажаєте обмежитись нескладним запитом, обравши звичайний конверт, цей варіант саме для Вас.",
      printedOrderText:
        "Якщо бажаєте надрукувати конверт у корпоративному стилі, додавши логотип, адресу, елементи компанії тощо, цей варіант саме для Вас.",
      individualOrderText:
        "Якщо маєте власні ідеї для дизайну і Вам потрібна максимальна гнучкість в оформленні конверта, цей варіант саме для Вас.",
      next: "Далі",
    },
  },
  en: {
    translation: {
      acquainted: "Let's get acquainted",
      home: "Home",
      products: "Products",
      about: "About us",
      calculate: "Calculate",
      contacts: "Contacts",
      contactUs: "Contact us",
      changeLang: {
        en: "Укр",
      },
      envelopes: "envelopes",
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
      contactBranchLviv: "Lviv, Zelena str. 251",
      contactFactory: "Ivano-Frankivsk Makuha str. 6",
      contactRepresentative: "Ukrinvestprylad Lviv Zelena str. 251",
      ourClients: "Our clients",
      phone: "Phone",
      statistic: "Important statistic",
      statisticFact: "Useful and important information about our factory",
      send: "Send",
      hearingLoss:
        "10% of workers in our factory are people with hearing problems",
      ourHistory: "Our history",
      historyP1:
        "The Kuvert-Ukraine envelope factory is the largest envelope manufacturer in Ukraine since 1999 and part of the Mayer-Kuvert-network GmbH - largest envelope manufacturing company in Europe. We produce over 250 million envelopes each year thanks to the factory's high quality machine range. Collaboration with leading European paper manufacturers makes it possible to ensure the production of guaranteed excellent raw materials. We are working hard to improve all processes to keep the environmental footprint as small as possible, so the factory has a waste-free technology.",
      historyP2:
        "Kuvert-Ukraine offers consumers the widest range of mail envelopes and packages, unique patented products and innovations in the field of advertising envelope, permanent warehouse stocks and certified quality control.",
      visitMayer: "Visit “Mayer-Kuvert-network GmbH” website",
      missionTitle: "Our mission",
      mission:
        "We are industry leaders and take on any challenge to provide our customers with excellent workmanship and the best results possible thanks to the powerful technical and technological production, professionalism and well-coordinated work of the team, care for the environment in production and processing capabilities.",
      certificate: "Certificates and Awards",
      participants: "We are part of",
      requestType: "Request Type",
      requestOrderCreate: "Order creation",
      requestPersonal: "Personal information",
      chooseType: "Choose type of request",
      basicOrder: "Basic order",
      printedOrder: "Printed order",
      individualOrder: "Individual order",
      basicOrderText:
        "If you want to limit yourself to a simple inquiry by choosing a regular envelope, this option is for you.",
      printedOrderText:
        "If you want to print a corporate-style envelope with the logo, address, company elements, etc., this option is for you.",
    },
    individualOrderText:
      "If you have your own design ideas and need maximum flexibility in envelope design, this option is for you.",
    next: "Next",
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
