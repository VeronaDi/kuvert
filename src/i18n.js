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
      aboutUsShort: "Коротко про нас",
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
      amount: "Кількість, шт",
      banderole: "Бандерольні пакети",
      basicOrder: "Складський запит",
      basicOrderText:
        "Якщо бажаєте обрати продукцію зі складу, цей варіант саме для Вас.",
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
      chooseDesiredProduct: "Оберіть продукцію",
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
      cosmetic: "Косметичні кабінети",
      creatIndEnv: "Створіть запит, щоб перетворити мрію в реальність",
      createRequest: "Створити запит",
      department: "Відділ",
      dnipro: "Дніпро",
      docFlow: "Документообіг",
      docufixText:
        "Конверти Docufix — прозорі поліетиленові конверти з клейовим шаром на всю сторону. Не потрібно більше додатково пересилати поштою документи на товар, достатньо вкласти їх в конверт Docufix і приклеїти його на коробку або піддон.",
      distributionProducts: "Розсилка рекламної або інформаційної продукції",
      disableWorkers: "10% працівників нашої фабрики —  це люди з інвалідністю",
      ecobagColor: "Кольорові пакети з паперовими ручками",
      ecobagWhite: "Білі пакети з паперовими ручками",
      ecobagBrown: "Коричневі пакети з паперовими ручками",
      ecobagText:
        "Пакети з паперовими ручками польської фабрики <a href='https://ecobagnetwork.eu/' target='_blank rel='nofollow'>Ecobag Network</a> виготовлені з міцного паперу, що витримує вагу до 3-8 кг (залежно від розміру) і не псуються від вологи. Екологічне та комфортне пакування продукції.",
      enterAmount: "Введіть кількість",
      enterAmountText: "Вкажіть кількість, яка Вас цікавить",
      envelope: "Конверт",
      envelopes: "Конверти",
      envelopesStandard: "Прямий клапан",
      envelopeDetails: "Параметри конверта",
      extensionEnvelopes: "Пакети з розширенням",
      extensionEnvelopesText:
        "Пакети з розширенням виготовлені з міцного крафтового паперу, вони зручні для відправки об'ємних вкладень: книг, журналів, великої кількості документації. Розширення становить 40 мм.",
      greetingLetters: "Вітальні листи",
      handleType: "Тип ручки",
      height: "Висота, мм",
      historyP1:
        "Фабрика конвертів «Куверт-Україна» належить до концерну «Mayer-Kuvert-network» і є найбільшим виробником поштових конвертів та пакетів в Україні з 1999 року. Співпраця з європейськими постачальниками забезпечує виробництво якісною сировиною. Ми наполегливо працюємо над удосконаленням усіх процесів, на фабриці діє технологія безвідходного виробництва, що залишає екологічний слід якомога менший.",
      historyP2:
        "«Куверт-Україна» пропонує споживачам найширший асортимент поштових конвертів та пакетів, унікальні запатентовані продукти та інновації в галузі рекламного конверта, постійні складські запаси та сертифікований контроль якості.",
      homepage: "Повернутися на головну",
      hospital: "Лікарні та поліклініки",
      indexAbout:
        "Фабрика конвертів «Куверт-Україна» належить до концерну «Mayer-Kuvert-network» і є найбільшим виробником поштових конвертів та пакетів в Україні з 1999 року. Потужність фабрики складає 2,5 млн конвертів за добу.",
      indexContactUs:
        "Виробництво фабрики конвертів «Куверт-Україна» знаходиться в місті Івано-Франківськ. Наші філії діють в таких містах: Київ, Харків, Дніпро та Львів.",
      individualEnv: "Конверти з індивідуальним дизайном",
      individualEnvText:
        "Пропонуємо максимальну гнучкість в оформленні Вашого особливого конверта. Відповідно, можливості дизайну практично необмежені.",
      individualOrder: "Індивідуальний запит",
      individualOrderText:
        "Якщо бажаєте продукцію з власними параметрами, цей варіант саме для Вас.",
      innerPrint: "Внутрішній друк",
      innerPrintShort: "Внутр. друк",
      innerandouterPrint: "Зовнішній та внутрішній друк",
      industrial: "Промислові підприємства",
      infoInscriptions: "Вкладення інформуючих написів на вантажах",
      ivano: "Івано-Франківськ",
      kyiv: "Київ",
      kharkiv: "Харків",
      g: "г",
      gsm: "г/м²",
      learnMore: "Дізнатись більше",
      lviv: "Львів",
      mainSlogan: "Конверт створює перше враження",
      missionTitle: "Наша місія",
      mission:
        "Ми лідери галузі та приймаємо будь-які виклики, щоб забезпечувати споживачів відмінною якістю роботи і найкращим результатом, можливим завдяки потужному технічному і технологічному виробництву, професіоналізму і злагодженій роботі команди, турботою про навколишнє довкілля при виготовленні продукції і можливості її переробки.",
      message: "Повідомлення",
      messageText: "Напишіть тут своє повідомлення",
      mm: "мм",
      mk: "мокроклеючий",
      name: "Ім'я та прізвище",
      next: "Далі",
      news: "Новини",
      noPrint: "Без друку",
      other: "інший",
      otherProducts: "Інша продукція",
      ourClients: "Наші клієнти",
      outerPrint: "Зовнішній друк",
      ownEnvIdea: "У Вас є ідея для власного дизайну конвертів?",
      ownPrintIdea: "У Вас є ідея для власного друку на конвертах?",
      packPresent: "Пакування подарункової, рекламної та сувенірної продукції",
      packBulkProd: "Пакування об'ємної продукції",
      participants: "Ми є частиною",
      paperGSM: "Щільність паперу, г/м²",
      paperBrand: "Марка паперу",
      paperbags: "Пакети з паперовими ручками",
      paperType: "Папір",
      phone: "Телефон",
      personalDetails: "Особисті дані",
      pocket: "Пакет",
      popupMap: "Фабрика конвертів Куверт-Україна",
      price: "Ціна",
      print: "Друк",
      printDetails: "Параметри друку",
      printedOrder: "Запит друку",
      printedOrderText:
        "Якщо бажаєте продукцію з власним друком, цей варіант саме для Вас.",
      printMockup: "Приклад друку (необов'язково)",
      productionDep: "Виробничий відділ",
      printProducts: "Продукція з друком",
      printProductsText:
        "Пропонуємо професійний друк на конвертах та паперових торбах— нанесення логотипу компанії, адреси, тощо. Залежно від призначення, іміджевих вимог та Вашого бюджету ми здійснюємо три види друку.",
      productLabeling: "Маркування товару",
      pcs: " шт.",
      quantityBox: "Коробка",
      right: "Відстань справа",
      representativeVP:
        "«Куверт-Україна» офіційний представник «VP group». <a href='https://www.vp-group.de/en/' target='_blank rel='nofollow'>Перейти на веб-сайт «VP group».</a>",
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
      smM: "см/м",
      statistic: "Важлива статистика",
      statisticFact: "Корисні та значні дані про нашу фабрику",
      stationery: "Канцелярські магазини",
      stericlin: "Стерилізаційні пакети Stericlin®",
      stericlinText:
        "<a href='https://www.stericlin.de/en/' target='_blank rel='nofollow'>Stericlin®</a>— пакети для стерилізації медичного інструменту та розхідних матеріалів відповідають вимогам, що висуваються до медичних стерилізаційних пакувальних матеріалів. У наявності пакети з бічними складками і без бічних складок. ",
      supermarket: "Супермаркети",
      titleText:
        "Фабрика конвертів «Куверт-Україна», як найбільший виробник конвертів в Україні, пропонує найновіші розробки у галузі виробництва і гарантує високу якість продукції.",
      thanx: "Дякуємо за Ваш запит!",
      thanxText:
        "Ваш запит надіслано. Наш менеджер зв'яжеться з Вами для уточнення та підтвердження запиту.",
      thermopack: "Термоупаковка",
      thermopackText:
        "Пропонуємо конверти упаковані в термоплівку, яка захищає їх від бруду. Упаковка має штрих-код, що дозволяє реалізацію в сучасних торгових мережах. Наявні стандартні упаковки з логотипом «Куверт-Україна» по 25, 50 і 100 шт. Також Ви можете замовити брендовану упаковку з власною кількістю конвертів.",
      thousandPcs: "за 1000 шт.",
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
      aboutUsShort: "Briefly about us",
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
      amount: "Amount, pcs",
      banderole: "Banderole pockets",
      basicOrder: "Werehouse inquiry",
      basicOrderText:
        "If you want to choose products from warehouse, this option is for you.",
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
      chooseDesiredProduct: "Choose product",
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
      cosmetic: "Cosmetic cabinets",
      creatIndEnv: "Create a request to turn your dream into reality",
      createRequest: "Create request",
      department: "Department",
      dnipro: "Dnipro",
      docFlow: "Document flow",
      docufixText:
        "Docufix envelopes - transparent polyethylene envelopes with adhesive on the side. No more need send additional mail with documents for goods, just put them in an envelope Docufix and stick it on the box or pallet.",
      distributionProducts:
        "Distribution of advertising or information products",
      disableWorkers:
        "10% of workers in our factory are people with disabilities",
      ecobagColor: "Colored paper bags with paper handles",
      ecobagWhite: "White paper bags with paper handles",
      ecobagBrown: "Brown paper bags with paper handles",
      ecobagText:
        "Paper bags with paper handles manufactured by Polish factory <a href='https://ecobagnetwork.eu/' target='_blank rel='nofollow'>Ecobag Network</a> are made of durable paper that can withstand a weight of up to 3-8 kg (depending on size) and do not deteriorate from moisture. Ecological and comfortable packaging of products.",
      enterAmount: "Enter amount",
      enterAmountText:
        "Specify the amount of envelopes you would like to order",
      envelope: "Envelope",
      envelopes: "envelopes",
      envelopesStandard: "Straight flap",
      envelopeDetails: "Envelope details",
      extensionEnvelopes: "Pockets with extension",
      extensionEnvelopesText:
        "Pockets with extension are made of durable kraft paper, they are convenient for sending bulky investments: books, magazines, a large amount of documentation. The extension is 40 mm.",
      greetingLetters: "Greeting letters",
      handleType: "Handle type",
      height: "Height, mm",
      historyP1:
        "The envelope factory «Kuvert-Ukraine» belongs to the concern «Mayer-Kuvert-network» and is the largest manufacturer of postal envelopes and packages in Ukraine since 1999. Cooperation with European suppliers ensures high-quality raw materials. We work hard to improve all processes, the factory has a technology of waste-free production, which leaves an ecological footprint as small as possible.",
      historyP2:
        "Kuvert-Ukraine offers consumers the widest range of mail envelopes and packages, unique patented products and innovations in the field of advertising envelope, permanent warehouse stocks and certified quality control.",
      homepage: "Back to homepage",
      hospital: "Hospitals and clinics",
      indexAbout:
        "The envelope factory «Kuvert-Ukraine» belongs to the concern «Mayer-Kuvert-network» and is the largest manufacturer of postal envelopes and packages in Ukraine since 1999. The capacity of the factory is 2.5 million envelopes per day.",
      indexContactUs:
        "The envelope factory Kuvert-Ukraine is located in the city of Ivano-Frankivsk. Our branches operate in the following cities: Kyiv, Kharkiv, Dnipro and Lviv.",
      individualEnv: "Envelopes with individual design",
      individualEnvText:
        "If you want products with your own parameters, this option is for you.",
      individualOrder: "Individual inquiry",
      individualOrderText:
        "If you have your own design ideas and need maximum flexibility in envelope design, this option is for you.",
      industrial: "Industrial companies",
      innerPrint: "Inner print",
      innerPrintShort: "Inner print",
      innerandouterPrint: "Outer and inner print",
      infoInscriptions: "Attaching informational inscriptions on goods",
      ivano: "Ivano-Frankivsk",
      kyiv: "Kyiv",
      g: "g",
      gsm: "gsm",
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
      news: "News",
      noPrint: "Without print",
      other: "other",
      otherProducts: "Other products",
      ourClients: "Our clients",
      outerPrint: "Outer print",
      ownEnvIdea: "Do you have an idea for your own envelope design?",
      ownPrintIdea: "Do you have an idea for your own envelope print?",
      packPresent: "Packaging of gift, advertising and souvenir products",
      packBulkProd: "Packaging of bulk products",
      participants: "We are part of",
      paperGSM: "Paper GSM",
      paperBrand: "Paper brand",
      paperbags: "Paper bags",
      paperType: "Paper",
      phone: "Phone",
      personalDetails: "Personal details",
      pocket: "Pocket",
      popupMap: "Kuvert-Ukraine envelope factory",
      price: "Price",
      print: "Print",
      printDetails: "Print details",
      printedOrder: "Printed order",
      printedOrderText:
        "If you want products with your own printing, this option is for you.",
      printMockup: "Print sample (not necessary)",
      printProducts: "Printed products",
      printProductsText:
        "We offer professional printing on envelopes and paper bags - the company logo, address, etc. Depending on the purpose, image requirements and your budget we carry out three types of printing.",
      productionDep: "Production department",
      productLabeling: "Product labeling",
      pcs: " pcs",
      quantityBox: "Box",
      right: "Right distance",
      representativeVP:
        "«Kuvert-Ukraine» is official representative of «VP group». <a href='https://www.vp-group.de/en/' target='_blank rel='nofollow'>Visit «VP group» website.</a>",
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
      smM: "sm/m",
      statistic: "Important statistic",
      statisticFact: "Useful and important information about our factory",
      stationery: "Stationery shops",
      stericlin: "Stericlin® packaging system",
      stericlinText:
        "<a href='https://www.stericlin.de/en/' target='_blank rel='nofollow'>Stericlin®</a> - packages for sterilization medical instruments and consumables, meet the requirements that apply to medical sterilization packaging materials. There are packages with side folds and without side folds.",
      supermarket: "Supermarkets",
      titleText:
        "Kuvert-Ukraine, as the largest envelope manufacturer in Ukraine, offers the latest developments in the manufacturing industry and guarantees high quality products.",
      thanx: "Thank you for request!",
      thanxText:
        "Your request has been sent. Our manager will contact you to check and confirm the request.",
      thermopack: "Thermopack",
      thermopackText:
        "We offer envelopes packed in thermal film, which protects them from dirt. The packaging has a barcode that allows implementation in modern retail chains. Available standard packages with “Kuvert-Ukraine” logo of 25, 50 and 100 pcs. You can also order branded packaging with your own amount of envelopes.",
      thousandPcs: "for 1000 pcs.",
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
