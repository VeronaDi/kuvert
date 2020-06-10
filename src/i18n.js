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
      additionalDetails: "Додаткові відомості",
      additionalInfo: "Додаткова інформація (необов'язково)",
      addressBranch: "Структурні підрозділи",
      addressBranchKyiv: "вул. Сім'ї Сосніних, 9 (Електротехнічний завод)",
      addressBranchDnipro: "вул. Акінфієва, 18",
      addressBranchKharkiv: "вул. Плеханівська, 117",
      addressBranchLviv: "вул. Зелена, 251",
      addressOfFactory: "Адреса фабрики",
      addressFactory: "вул.І.Макуха, 6",
      addToRequest: "Додати до запиту",
      airpoc: "Бандерольні пакети з повітряними бульбашками",
      airpocText:
        "Бандерольні пакети з поліетиленовими повітряними вставками, що гарантують надійний захист для відправки крихких і цінних предметів.",
      amount: "Кількість",
      banderole: "Бандерольні пакети",
      basicOrder: "Стандартний запит",
      basicOrderText:
        "Якщо Ви бажаєте обмежитись нескладним запитом, обравши звичайний конверт, цей варіант саме для Вас.",
      bk: "без клею",
      brown: "коричневий",
      bottom: "Відстань знизу",
      bulkyTransportation: "Надсилання об'ємних вкладень",
      call: "Зателефонуйте нам",
      cardboardEnv: "Пакети з картонною вставкою",
      cardboardEnvText:
        "Пакети з картонною вставкою чудово підійдуть для відправки декількох аркушів формату А4, впораються зі збереженням зовнішнього вигляду вмісту. Такий пакет вдвічі легший, ніж повністю картонний пакет, а також значно дешевший.",
      city: "Місто",
      chooseDepartment: "Оберіть відділ",
      chooseType: "Оберіть тип запиту",
      chooseSize: "Оберіть розмір конверта",
      chooseGlue: "Оберіть тип заклеювання",
      chooseEnvelopeType: "Оберіть тип продукції",
      chooseDesiredProduct: "Оберіть бажану продукцію",
      choosePaperGSM: "Оберіть щільність паперу",
      choosePaperType: "Оберіть тип паперу",
      choosePrintType: "Оберіть вид друку",
      chooseWindow: "Оберіть тип вікна",
      chooseColor: "Оберіть колірність",
      chooseFile: "Перетягніть файл(и) сюди або оберіть для завантаження",
      certificate: "Сертифікати і нагороди",
      CEO: "Директор",
      code: "Артикул",
      color: "Колір",
      colorsFront: "Друк на передній стороні (кількість кольорів)",
      colorsBack: "Друк на зворотній стороні (кількість кольорів)",
      colorsAmount: "Кількість кольорів",
      company: "Організація",
      contactDetails: "Контактні дані",
      creatIndEnv: "Створіть запит, щоб перетворити мрію в реальність",
      createRequest: "Створити запит",
      department: "Відділ",
      dnipro: "Дніпро",
      docFlow: "Документообіг",
      docufixText:
        "Конверти Docufix — прозорі поліетиленові конверти з клейовим шаром на всю сторону. Не потрібно більше додатково пересилати поштою документи на товар, достатньо вкласти їх в конверт Docufix і приклеїти його на коробку або піддон.",
      distributionProducts: "Розсилка рекламної або інформаційної продукції",
      ecobagColor: "Кольорові пакети з паперовими ручками",
      ecobagWhite: "Білі пакети з паперовими ручками",
      ecobagBrown: "Коричневі пакети з паперовими ручками",
      ecobagText:
        "Пакети з паперовими ручками польської фабрики <a href='https://ecobagnetwork.eu/' target='_blank rel='nofollow'>Ecobag Network</a> виготовлені з міцного паперу, що витримує вагу до 3-8 кг (залежно від розміру) і не псуються від вологи. Екологічне та комфортне пакування продукції.",
      envelope: "Конверт",
      envelopes: "Конверти",
      envelopesStandard: "Стандартні конверти",
      envelopeDetails: "Параметри конверта",
      extensionEnvelopes: "Пакети з розширенням",
      extensionEnvelopesText:
        "Пакети з розширенням виготовлені з міцного крафтового паперу, вони зручні для відправки об'ємних вкладень: книг, журналів, великої кількості документації. Розширення становить 40 мм.",
      greetingLetters: "Вітальні листи",
      handleType: "Тип ручки",
      hearingLoss: "10% працівників нашої фабрики —  це люди з вадами слуху",
      height: "Висота, мм",
      historyP1:
        "Фабрика конвертів «Куверт-Україна» — частина найбільшого в Європі концерну з виробництва конвертів «Mayer-Kuvert-network GmbH» і найбільший виробник конвертів в Україні з 1999 року. Щороку ми виготовляємо більше 250 млн. конвертів завдяки високоякісному машинному парку фабрики. Співпраця з провідними європейськими виробниками паперу дає змогу забезпечувати виробництво гарантовано досконалою сировиною. Ми наполегливо працюємо над удосконаленням усіх процесів для того, щоб залишити екологічний слід якомога менший, тому на фабриці діє технологія безвідходного виробництва.",
      historyP2:
        "«Куверт-Україна» пропонує споживачам найширший асортимент поштових конвертів та пакетів, унікальні запатентовані продукти та інновації в галузі рекламного конверта, постійні складські запаси та сертифікований контроль якості.",
      homepage: "Повернутися на головну",
      indexAbout:
        "Фабрика конвертів «Куверт-Україна» — частина найбільшого в Європі концерну з виробництва конвертів «Mayer Kuvert Network» і найбільший виробник конвертів в Україні з 1999 року. Щороку ми виготовляємо більше 250 млн. конвертів завдяки високоякісному машинному парку фабрики.",
      indexContactUs:
        "Виробництво фабрики конвертів «Куверт-Україна» знаходиться в місті Івано-Франківськ. Наші філії діють в таких містах: Київ, Харків, Дніпро та Львів.",
      individualEnv: "Конверти з індивідуальним дизайном",
      individualEnvText:
        "Пропонуємо максимальну гнучкість в оформленні Вашого особливого конверта. Відповідно, можливості дизайну практично необмежені.",
      individualOrder: "Індивідуальний запит",
      individualOrderText:
        "Якщо маєте власні ідеї для дизайну і Вам потрібна максимальна гнучкість в оформленні конверта, цей варіант саме для Вас.",
      innerPrint: "Внутрішній друк",
      innerandouterPrint: "Зовнішній та внутрішній друк",
      infoInscriptions: "Вкладення інформуючих написів на вантажах",
      ivano: "Івано-Франківськ",
      kyiv: "Київ",
      kharkiv: "Харків",
      g: "г",
      learnMore: "Дізнатись більше",
      lviv: "Львів",
      mainSlogan: "Конверт створює перше враження",
      missionTitle: "Наша місія",
      mission:
        "Ми лідери галузі та приймаємо будь-які виклики, щоб забезпечувати клієнтів відмінною якістю роботи і найкращим результатом, можливим завдяки потужному технічному і технологічному виробництву, професіоналізму і злагодженій роботі команди, турботою про навколишнє довкілля при виготовленні продукції і можливості її переробки.",
      message: "Повідомлення",
      messageText: "Напишіть тут своє повідомлення",
      mm: "мм",
      mk: "мокроклеючий",
      name: "Ім'я та прізвище",
      next: "Далі",
      noPrint: "Без друку",
      other: "інший",
      ourClients: "Наші клієнти",
      ourHistory: "Наша історія",
      outerPrint: "Зовнішній друк",
      ownEnvIdea: "У Вас є ідея для власного дизайну конвертів?",
      packPresent: "Пакування подарункової, рекламної та сувенірної продукції",
      packBulkProd: "Пакування об'ємної продукції",
      participants: "Ми є частиною",
      paperGSM: "Щільність паперу, г/м²",
      paperBrand: "Марка паперу",
      paperbags: "Пакети з паперовими ручками",
      paperType: "Тип паперу",
      phone: "Телефон",
      personalDetails: "Особисті дані",
      pocket: "Пакет",
      price: "Ціна",
      print: "Друк",
      printDetails: "Параметри друку",
      printedOrder: "Запит друку",
      printedOrderText:
        "Якщо бажаєте надрукувати конверт у корпоративному стилі, додавши логотип, адресу, елементи компанії тощо, цей варіант саме для Вас.",
      printMockup: "Приклад друку (необов'язково)",
      productionDep: "Виробничий відділ",
      productLabeling: "Маркування товару",
      pcs: " шт.",
      quantityBox: "Кількість в коробці",
      right: "Відстань справа",
      request: "Створити запит",
      requestCall: "Замовити дзвінок",
      requestType: "Тип запиту",
      requestOrderCreate: "Створення запиту",
      requestPersonal: "Контактні дані",
      salesDep: "Відділ збуту",
      size: "Розмір",
      sealing: "Тип заклеювання",
      send: "Надіслати",
      sendUsMessage: "Якщо у Вас виникли запитання, будь ласка, напишіть нам",
      sk: "самоклеючий",
      skl: "з відривною стрічкою",
      statistic: "Важлива статистика",
      statisticFact: "Корисні та значні дані про нашу фабрику",
      stationery: "Канцелярські магазини",
      supermarket: "Супермаркети",
      titleText:
        "Фабрика конвертів «Куверт-Україна», як найбільший виробник конвертів в Україні, пропонує найновіші розробки у галузі виробництва і гарантує високу якість продукції.",
      thanx: "Дякуємо за Ваш запит!",
      thanxText:
        "Ваш запит надіслано. Наш менеджер зв'яжеться з Вами для уточнення та підтвердження запиту.",
      thermopack: "Термоупаковка",
      thermopackText:
        "Упаковка, що містить по 10, 25, 50, 100… шт. конвертів. Термоупаковка захищає конверти від бруду, має нанесений штрих-код, що дозволяє реалізацію в сучасних торгових мережах, а також позбавляє від необхідності відраховувати потрібну кількість конвертів. Можлива брендова термоупаковка з Вашим логотипом, або ж стандартна —  з логотипом «Куверт-Україна».",
      type: "Тип",
      typePaper: "Вид паперу",
      typePrint: "Вид друку",
      triangularValve: "Трикутний клапан",
      triangularValveText:
        "Конверти з трикутним клапаном — справжня класика, такими конверти були раніше. Ваша кореспонденція надійно захищена, бо ці конверти не вдасться відкрити непомітно.",
      ukrinvest: "Укрінвестприлад",
      viewProducts: "Каталог продукції",
      visitUs: "Відвідайте нас",
      visitMayer: "Відвідати вебсайт “Mayer-Kuvert-network GmbH”",
      window: "Вікно",
      windowDetails: "Параметри вікна",
      windowYes: "з вікном",
      windowNo: "без вікна",
      width: "Ширина, мм",
      weight: "Потрібна допомога з розрахунком ваги конвертів?",
      weightUse: "Скористайтесь нашим калькулятором",
      weightcalc: "Калькулятор ваги",
      weightcalcText:
        "Вкажіть нижче необхідні параметри конверта і Ви дізнаєтесь його вагу.",
      weightResult: "Вага замовлення становить ",
      white: "білий",
      whiteOffset: "білий офсетний",
      whiteCoated: "білий крейдований",
      whereUse: "Сфера застосування",
      writeUs: "Напишіть нам",
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
      additionalDetails: "Additional details",
      additionalInfo: "Additional information (not necessary)",
      addressBranch: "Offices",
      addressBranchKyiv: "Simji Sosninykh str. 9 (Electrotechnical factory)",
      addressBranchDnipro: "Akinfeeva str. 18",
      addressBranchKharkiv: "Plehanivska str. 117",
      addressBranchLviv: "Zelena str. 251",
      addressOfFactory: "Address of factory",
      addressFactory: "Ivano-Frankivsk, Makuha str. 6",
      addToRequest: "Add to request",
      airpoc: "Parcel bags with air bubbles",
      airpocText:
        "Parcel packages with polyethylene air inserts, which guarantees reliable protection for sending fragile and valuable items.",
      amount: "Amount",
      banderole: "Banderole bags",
      basicOrder: "Basic order",
      basicOrderText:
        "If you want to limit yourself to a simple inquiry by choosing a regular envelope, this option is for you.",
      bottom: "Bottom distance",
      bk: "without glue",
      brown: "brown",
      bulkyTransportation: "Sending bulk attachments",
      call: "Call us",
      cardboardEnv: "Envelopes with cardboard insert",
      cardboardEnvText:
        "Packages with a cardboard insert are perfect for sending several sheets of A4 format, will cope with the preservation of the appearance of the contents. This package is twice as light as a fully cardboard package and much cheaper.",
      city: "City",
      chooseDepartment: "Choose department",
      chooseType: "Choose type of request",
      chooseSize: "Choose envelope size",
      chooseGlue: "Choose sealing type",
      chooseEnvelopeType: "Choose type",
      chooseDesiredProduct: "Choose desired product",
      choosePaperGSM: "Choose paper GSM",
      choosePaperType: "Choose paper quality",
      choosePrintType: "Choose print type",
      chooseWindow: "Choose window type",
      chooseFile: "Drag file(s) here or browse for a file to upload",
      chooseColor: "Choose how many colors",
      certificate: "Certificates and Awards",
      CEO: "CEO",
      code: "Code",
      color: "Color",
      colorsFront: "Print on front side (amount of colors)",
      colorsBack: "Print on back side (amount of colors)",
      colorsAmount: "Amount of colors",
      company: "Company",
      contactDetails: "Contact details",
      creatIndEnv: "Create a request to turn your dream into reality",
      createRequest: "Create request",
      department: "Department",
      dnipro: "Dnipro",
      docFlow: "Document flow",
      docufixText:
        "Docufix envelopes - transparent polyethylene envelopes with adhesive on the side. No more need send additional mail with documents for goods, just put them in an envelope Docufix and stick it on the box or pallet.",
      distributionProducts:
        "Distribution of advertising or information products",
      ecobagColor: "Colored paper bags with paper handles",
      ecobagWhite: "White paper bags with paper handles",
      ecobagBrown: "Brown paper bags with paper handles",
      ecobagText:
        "Paper bags with paper handles manufactured by Polish factory <a href='https://ecobagnetwork.eu/' target='_blank rel='nofollow'>Ecobag Network</a> are made of durable paper that can withstand a weight of up to 3-8 kg (depending on size) and do not deteriorate from moisture. Ecological and comfortable packaging of products.",
      envelope: "Envelope",
      envelopes: "envelopes",
      envelopesStandard: "Standard envelopes",
      envelopeDetails: "Envelope details",
      extensionEnvelopes: "Pockets with extension",
      extensionEnvelopesText:
        "Pockets with extension are made of durable kraft paper, they are convenient for sending bulky investments: books, magazines, a large amount of documentation. The extension is 40 mm.",
      greetingLetters: "Greeting letters",
      handleType: "Handle type",
      hearingLoss:
        "10% of workers in our factory are people with hearing problems",
      height: "Height, mm",
      historyP1:
        "The Kuvert-Ukraine envelope factory is the largest envelope manufacturer in Ukraine since 1999 and part of the Mayer-Kuvert-network GmbH - largest envelope manufacturing company in Europe. We produce over 250 million envelopes each year thanks to the factory's high quality machine range. Collaboration with leading European paper manufacturers makes it possible to ensure the production of guaranteed excellent raw materials. We are working hard to improve all processes to keep the environmental footprint as small as possible, so the factory has a waste-free technology.",
      historyP2:
        "Kuvert-Ukraine offers consumers the widest range of mail envelopes and packages, unique patented products and innovations in the field of advertising envelope, permanent warehouse stocks and certified quality control.",
      homepage: "Back to homepage",
      indexAbout:
        "Kuvert-Ukraine is part of Europe's largest Mayer-Kuvert-network envelope manufacturing group and the largest envelope manufacturer in Ukraine since 1999. Every year we produce over 250 million envelopes thanks to the factory's high quality machine park.",
      indexContactUs:
        "The envelope factory Kuvert-Ukraine is located in the city of Ivano-Frankivsk. Our branches operate in the following cities: Kyiv, Kharkiv, Dnipro and Lviv.",
      individualEnv: "Envelopes with individual design",
      individualEnvText:
        "We offer maximum flexibility in the design of your special envelope. Accordingly, the design possibilities are almost unlimited.",
      individualOrder: "Individual inquiry",
      individualOrderText:
        "If you have your own design ideas and need maximum flexibility in envelope design, this option is for you.",
      innerPrint: "Inner print",
      innerandouterPrint: "Outer and inner print",
      infoInscriptions: "Attaching informational inscriptions on goods",
      ivano: "Ivano-Frankivsk",
      kyiv: "Kyiv",
      g: "g",
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
      mk: "gummed",
      name: "Name and Surname",
      next: "Next",
      noPrint: "Without print",
      other: "other",
      ourClients: "Our clients",
      ourHistory: "Our history",
      outerPrint: "Outer print",
      ownEnvIdea: "Do you have an idea for your own envelope design?",
      packPresent: "Packaging of gift, advertising and souvenir products",
      packBulkProd: "Packaging of bulk products",
      participants: "We are part of",
      paperGSM: "Paper GSM",
      paperBrand: "Paper brand",
      paperbags: "Paper bags",
      paperType: "Paper type",
      phone: "Phone",
      personalDetails: "Personal details",
      pocket: "Pocket",
      price: "Price",
      print: "Print",
      printDetails: "Print details",
      printedOrder: "Printed order",
      printedOrderText:
        "If you want to print a corporate-style envelope with the logo, address, company elements, etc., this option is for you.",
      printMockup: "Print sample (not necessary)",
      productionDep: "Production department",
      productLabeling: "Product labeling",
      pcs: " pcs",
      quantityBox: "Quantity in box",
      right: "Right distance",
      request: "Create request",
      requestCall: "Request call",
      requestType: "Request Type",
      requestOrderCreate: "Order creation",
      requestPersonal: "Personal information",
      salesDep: "Sales department",
      size: "Size",
      sealing: "Sealing",
      send: "Send",
      sendUsMessage:
        "If you have any questions do not hesitate to send us a message",
      sk: "self seal",
      skl: "peel and seal",
      statistic: "Important statistic",
      statisticFact: "Useful and important information about our factory",
      stationery: "Stationery shops",
      supermarket: "Supermarkets",
      titleText:
        "Kuvert-Ukraine, as the largest envelope manufacturer in Ukraine, offers the latest developments in the manufacturing industry and guarantees high quality products.",
      thanx: "Thank you for request!",
      thanxText:
        "Your request has been sent. Our manager will contact you to check and confirm the request.",
      thermopack: "Thermopack",
      thermopackText:
        "Package containing 10, 25, 50, 100… pcs. envelopes. Thermal packaging protects envelopes from dirt, has a barcode, which allows implementation in modern retail chains, as well as eliminates the need to deduct the required number of envelopes. Branded thermal packaging with your logo is possible or standard - with the Kuvert-Ukraine logo.",
      type: "Type",
      typePaper: "Paper quality",
      typePrint: "Print type",
      triangularValve: "Triangular valve",
      triangularValveText:
        "Envelopes with a triangular flap - a real classic, such envelopes were before. Your correspondence is securely protected because these envelopes cannot be opened unnoticed.",
      ukrinvest: "Ukrinvestprylad",
      viewProducts: "View products",
      visitUs: "Visit us",
      visitMayer: "Visit “Mayer-Kuvert-network GmbH” website",
      window: "Window",
      windowDetails: "Window details",
      windowYes: "with window",
      windowNo: "without window",
      width: "Width, mm",
      weight: "Need help calculating envelope weight?",
      weightUse: "Use our calculator",
      weightcalc: "Weight calculator",
      weightcalcText:
        "Specify the envelope parameters below and you will know its weight.",
      weightResult: "Order weight equals ",
      white: "white",
      whiteOffset: "white offset",
      whiteCoated: "white coated",
      whereUse: "Where to use",
      writeUs: "Write us",
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
