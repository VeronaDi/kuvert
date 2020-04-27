import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  uk: {
    translation: {
      acquainted: "Давайте познайомимось",
      about: "Про нас",
      calculate: "Розрахувати",
      contacts: "Контакти",
      contactUs: "Зв'яжіться з нами",
      home: "Головна",
      products: "Продукція",
      changeLang: {
        uk: "Eng",
      },
      addressBranch: "Структурні підрозділи",
      addressBranchKyiv: "вул. Сім'ї Сосніних, 9 (Електротехнічний завод)",
      addressBranchDnipro: "вул. Акінфієва, 18",
      addressBranchKharkiv: "вул. Плеханівська, 117",
      addressBranchLviv: "вул. Зелена, 251",
      addressOfFactory: "Адреса фабрики",
      addressFactory: "вул.І.Макуха, 6",
      amount: "Кількість",
      basicOrder: "Стандартний запит",
      basicOrderText:
        "Якщо Ви бажаєте обмежитись нескладним запитом, обравши звичайний конверт, цей варіант саме для Вас.",
      city: "Місто",
      chooseDepartment: "Оберіть відділ",
      chooseType: "Оберіть тип запиту",
      chooseSize: "Оберіть розмір конверта",
      certificate: "Сертифікати і нагороди",
      CEO: "Директор",
      company: "Організація",
      contactDetails: "Контактні дані",
      department: "Відділ",
      dnipro: "м. Дніпро",
      envelopes: "Конверти",
      envelopeDetails: "Параметри конверта",
      hearingLoss: "10% працівників нашої фабрики —  це люди з вадами слуху",
      historyP1:
        "Фабрика конвертів «Куверт-Україна» — частина найбільшого в Європі концерну з виробництва конвертів «Mayer-Kuvert-network GmbH» і найбільший виробник конвертів в Україні з 1999 року. Щороку ми виготовляємо більше 250 млн. конвертів завдяки високоякісному машинному парку фабрики. Співпраця з провідними європейськими виробниками паперу дає змогу забезпечувати виробництво гарантовано досконалою сировиною. Ми наполегливо працюємо над удосконаленням усіх процесів для того, щоб залишити екологічний слід якомога менший, тому на фабриці діє технологія безвідходного виробництва.",
      historyP2:
        "«Куверт-Україна» пропонує споживачам найширший асортимент поштових конвертів та пакетів, унікальні запатентовані продукти та інновації в галузі рекламного конверта, постійні складські запаси та сертифікований контроль якості.",
      indexAbout:
        "Фабрика конвертів «Куверт-Україна» — частина найбільшого в Європі концерну з виробництва конвертів «Mayer Kuvert Network» і найбільший виробник конвертів в Україні з 1999 року. Щороку ми виготовляємо більше 250 млн. конвертів завдяки високоякісному машинному парку фабрики.",
      indexContactUs:
        "Виробництво фабрики конвертів «Куверт-Україна» знаходиться в місті Івано-Франківськ. Наші філії діють в таких містах: Київ, Харків, Дніпро та Львів.",
      individualOrder: "Індивідуальний запит",
      individualOrderText:
        "Якщо маєте власні ідеї для дизайну і Вам потрібна максимальна гнучкість в оформленні конверта, цей варіант саме для Вас.",
      ivano: "м. Івано-Франківськ",
      kyiv: "м. Київ",
      kharkiv: "м. Харків",
      learnMore: "Дізнатись більше",
      lviv: "м. Львів",
      mainSlogan: "Конверт створює перше враження",
      missionTitle: "Наша місія",
      mission:
        "Ми лідери галузі та приймаємо будь-які виклики, щоб забезпечувати клієнтів відмінною якістю роботи і найкращим результатом, можливим завдяки потужному технічному і технологічному виробництву, професіоналізму і злагодженій роботі команди, турботою про навколишнє довкілля при виготовленні продукції і можливості її переробки.",
      message: "Повідомлення",
      messageText: "Напишіть тут своє повідомлення",
      mm: "мм",
      name: "Ім'я та прізвище",
      next: "Далі",
      ourClients: "Наші клієнти",
      ourHistory: "Наша історія",
      participants: "Ми є частиною",
      phone: "Телефон",
      personalDetails: "Особисті дані",
      printedOrder: "Запит друку",
      printedOrderText:
        "Якщо бажаєте надрукувати конверт у корпоративному стилі, додавши логотип, адресу, елементи компанії тощо, цей варіант саме для Вас.",
      productionDep: "Виробничий відділ",
      request: "Створити запит",
      requestCall: "Замовити дзвінок",
      requestType: "Тип запиту",
      requestOrderCreate: "Створення запиту",
      requestPersonal: "Контактні дані",
      salesDep: "Відділ збуту",
      size: "Розмір",
      send: "Надіслати",
      sendUsMessage: "Якщо у Вас виникли запитання, будь ласка, напишіть нам",
      statistic: "Важлива статистика",
      statisticFact: "Корисні та значні дані про нашу фабрику",
      titleText:
        "Фабрика конвертів «Куверт-Україна», як найбільший виробник конвертів в Україні, пропонує найновіші розробки у галузі виробництва і гарантує високу якість продукції.",
      ukrinvest: "Укрінвестприлад",
      viewProducts: "Каталог продукції",
      visitMayer: "Відвідати вебсайт “Mayer-Kuvert-network GmbH”",
      weight: "Потрібна допомога з розрахунком ваги конвертів?",
      weightUse: "Скористайтесь нашим калькулятором",
    },
  },
  en: {
    translation: {
      about: "About us",
      acquainted: "Let's get acquainted",
      calculate: "Calculate",
      contacts: "Contacts",
      contactUs: "Contact us",
      home: "Home",
      products: "Products",
      changeLang: {
        en: "Укр",
      },
      addressBranch: "Offices",
      addressBranchKyiv: "Simji Sosninykh str. 9 (Electrotechnical factory)",
      addressBranchDnipro: "Akinfeeva str. 18",
      addressBranchKharkiv: "Plehanivska str. 117",
      addressBranchLviv: "Zelena str. 251",
      addressOfFactory: "Address of factory",
      addressFactory: "Ivano-Frankivsk, Makuha str. 6",
      amount: "Amount",
      basicOrder: "Basic order",
      basicOrderText:
        "If you want to limit yourself to a simple inquiry by choosing a regular envelope, this option is for you.",
      city: "City",
      chooseDepartment: "Choose department",
      chooseType: "Choose type of request",
      chooseSize: "Choose envelope size",
      certificate: "Certificates and Awards",
      CEO: "CEO",
      company: "Company",
      contactDetails: "Contact details",
      department: "Department",
      dnipro: "Dnipro",
      envelopes: "envelopes",
      envelopeDetails: "Envelope details",
      hearingLoss:
        "10% of workers in our factory are people with hearing problems",
      historyP1:
        "The Kuvert-Ukraine envelope factory is the largest envelope manufacturer in Ukraine since 1999 and part of the Mayer-Kuvert-network GmbH - largest envelope manufacturing company in Europe. We produce over 250 million envelopes each year thanks to the factory's high quality machine range. Collaboration with leading European paper manufacturers makes it possible to ensure the production of guaranteed excellent raw materials. We are working hard to improve all processes to keep the environmental footprint as small as possible, so the factory has a waste-free technology.",
      historyP2:
        "Kuvert-Ukraine offers consumers the widest range of mail envelopes and packages, unique patented products and innovations in the field of advertising envelope, permanent warehouse stocks and certified quality control.",
      indexAbout:
        "Kuvert-Ukraine is part of Europe's largest Mayer-Kuvert-network envelope manufacturing group and the largest envelope manufacturer in Ukraine since 1999. Every year we produce over 250 million envelopes thanks to the factory's high quality machine park.",
      indexContactUs:
        "The envelope factory Kuvert-Ukraine is located in the city of Ivano-Frankivsk. Our branches operate in the following cities: Kyiv, Kharkiv, Dnipro and Lviv.",
      individualOrder: "Individual order",
      individualOrderText:
        "If you have your own design ideas and need maximum flexibility in envelope design, this option is for you.",
      ivano: "Ivano-Frankivsk",
      kyiv: "Kyiv",
      kharkiv: "Kharkiv",
      learnMore: "Learn more",
      lviv: "Lviv",
      mainSlogan: "Envelope creates a first impression",
      missionTitle: "Our mission",
      mission:
        "We are industry leaders and take on any challenge to provide our customers with excellent workmanship and the best results possible thanks to the powerful technical and technological production, professionalism and well-coordinated work of the team, care for the environment in production and processing capabilities.",
      message: "Message",
      messageText: "Write your message here",
      mm: "mm",
      name: "Name and Surname",
      next: "Next",
      ourClients: "Our clients",
      ourHistory: "Our history",
      participants: "We are part of",
      phone: "Phone",
      personalDetails: "Personal details",
      printedOrder: "Printed order",
      printedOrderText:
        "If you want to print a corporate-style envelope with the logo, address, company elements, etc., this option is for you.",
      productionDep: "Production department",
      request: "Create request",
      requestCall: "Request call",
      requestType: "Request Type",
      requestOrderCreate: "Order creation",
      requestPersonal: "Personal information",
      salesDep: "Sales department",
      size: "Size",
      send: "Send",
      sendUsMessage:
        "If you have any questions do not hesitate to send us a message",
      statistic: "Important statistic",
      statisticFact: "Useful and important information about our factory",
      titleText:
        "Kuvert-Ukraine, as the largest envelope manufacturer in Ukraine, offers the latest developments in the manufacturing industry and guarantees high quality products.",
      ukrinvest: "Ukrinvestprylad",
      viewProducts: "View products",
      visitMayer: "Visit “Mayer-Kuvert-network GmbH” website",
      weight: "Need help calculating envelope weight?",
      weightUse: "Скористайтесь нашим калькулятором",
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
