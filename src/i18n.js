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
      accept: "Прийняти",
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
      accountDep: "Бухгалтерія",
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
      city: "Населений пункт",
      cookiesText:
        "Ми використовуємо файли cookie на нашому веб-сайті. Деякі з них є необхідними, тоді як інші допомагають нам покращити цей веб-сайт та ваш досвід.",
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
        "Прозорі поліетиленові конверти з клейовим шаром на всю сторону та з відривною стрічкою на клапані. Не потрібно більше додатково пересилати поштою документи на товар, достатньо вкласти їх в такий конверт і приклеїти його на коробку або піддон.",
      distributionProducts: "Розсилка рекламної або інформаційної продукції",
      disableWorkers: "10% працівників нашої фабрики —  це люди з інвалідністю",
      ecoblock: "Еко блоки для нотаток",
      ecobagColor: "Кольорові пакети з паперовими ручками",
      ecobagWhite: "Білі пакети з паперовими ручками",
      ecobagBrown: "Коричневі пакети з паперовими ручками",
      ecobagText:
        "Пакети з паперовими ручками польської фабрики <a href='https://ecobagnetwork.eu/' target='_blank rel='nofollow'>Ecobag Network</a> виготовлені з міцного паперу, що витримує вагу до 3-8 кг (залежно від розміру) і не псуються від вологи. Екологічне та комфортне пакування продукції.",
      ecobagProperties: {
        handles: {
          twisted: "кручена",
          flat: "плоска",
        },
        color: {
          white: "білий",
          brown: "коричневий",
          black: "чорний",
          lightblue: "блакитний",
          mint: "мятний",
          rose: "рожевий",
          yellow: "жовтий",
          green: "зелений",
          blue: "синій",
          red: "червоний",
        },
        paperType: {
          ribbed: "рифлений",
          smooth: "гладкий",
        },
      },
      enterAmount: "Введіть кількість",
      enterAmountText: "Вкажіть кількість, яка Вас цікавить",
      envelope: "Конверт",
      envelopes: "Конверти",
      envelopesProperties: {
        sealing: {
          gummed: "мокроклеючий",
          selfSeal: "самоклеючий",
          peelSeal: "відривна стрічка",
        },
        type: {
          envelope: "конверт",
          pocket: "пакет",
        },
        color: {
          white: "білий",
          brown: "коричневиий",
          orange: "помаранчевий",
          red: "червоний",
          yellowBlue: "жовтий і синій",
          coral: "кораловий",
          rose: "рожевий",
          green: "зелений",
          pastelYellow: "пастельно-жовтий",
          pastelBlue: "пастельно-блакитний",
          pastelLavender: "пастельно-лавандовий",
          pastelMint: "пастельно-м'ятний",
          pastelRose: "пастельно-рожевий",
          pastelCreme: "пастельно-кремовий",
        },
        print: {
          gray: "сірий",
        },
      },
      envelopesStandard: "Прямий клапан",
      envelopeDetails: "Параметри конверта",
      envelopeSize: "розмір конверта",
      emptyCartText: "Додайте товари зі сторінки продукції.",
      extensionEnvelopes: "Пакети з розширенням",
      extensionEnvelopesText:
        "Пакети з розширенням виготовлені з міцного крафтового паперу, вони зручні для відправки об'ємних вкладень: книг, журналів, великої кількості документації. Розширення становить 40 мм.",
      format: "Формат",
      greetingLetters: "Вітальні листи",
      handleType: "Тип ручки",
      height: "Висота, мм",
      historyP1:
        "Фабрика конвертів «Куверт-Україна» належить до концерну «Mayer-Kuvert-network» і є найбільшим виробником поштових конвертів та пакетів в Україні з 1999 року. Співпраця з європейськими постачальниками забезпечує виробництво якісною сировиною. Ми наполегливо працюємо над удосконаленням усіх процесів, на фабриці діє технологія безвідходного виробництва, що залишає екологічний слід якомога менший.",
      historyP2:
        "«Куверт-Україна» пропонує споживачам найширший асортимент поштових конвертів та пакетів, унікальні запатентовані продукти та інновації в галузі рекламного конверта, постійні складські запаси та сертифікований контроль якості.",
      homepage: "Повернутися на головну",
      hospital: "Лікарні та поліклініки",
      from: "від",
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
      individualRequestText:
        "Якщо Ви не знайшли те, що Вас цікавить серед стандартної продукції, напишіть нам побажання щодо свого конверту і ми розглянемо можливість його виробництва. Рекомендуємо вказати:",
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
      letterhead: "Бланки",
      mainSlogan: "Конверт створює перше враження",
      missionTitle: "Наша місія",
      mission:
        "Ми лідери галузі та приймаємо будь-які виклики, щоб забезпечувати споживачів відмінною якістю роботи і найкращим результатом, можливим завдяки потужному технічному і технологічному виробництву, професіоналізму і злагодженій роботі команди, турботою про навколишнє довкілля при виготовленні продукції і можливості її переробки.",
      message: "Повідомлення",
      messageText: "Напишіть тут своє повідомлення",
      metaDescrIndex:
        "«Куверт-Україна» – українська ланка найбільшого в Європі концерну з виробництва конвертів, бандерольних пакетів та паперових торб «Mayer-Kuvert-network GmbH».",
      metaDescrEnvelopes:
        "Купуйте конверти оптом у всіх кольорах та розмірах та отримайте найкращу вартість від виробника. Складські запаси, швидка доставка та відмінне обслуговування.",
      metaDescrPaperbags:
        "Шукаєте паперові пакети за оптовими цінами? У нас великий вибір паперових пакетів для всіх Ваших потреб. Замовляйте зараз!",
      metaDescrPrinted:
        "Друк на конвертах, бандерольних пакетах та паперових торбах. Надрукуйте свій логотип або власний дизайн, щоб зробити їх помітними.",
      metaDescrIndividual:
        "Створіть свій конверт з індивідуальними параметрами та друком, який виділятиметься серед інших та приверне увагу саме до Вашого повідомлення.",
      metaDescrContact:
        "Потрібні конверти, паперові торби або бандерольні пакети? Зв’яжіться з нами онлайн або зателефонуйте!",
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
      paperParam: "колір паперу та його щільність або ж марку паперу",
      paperbags: "Пакети з паперовими ручками",
      paperbagsWhite: "Білі пакети з паперовими ручками",
      paperbagsBrown: "Коричневі пакети з паперовими ручками",
      paperbagsColor: "Кольорові пакети з паперовими ручками",
      paperfile: "Паперові файли",
      paperType: "Папір",
      phone: "Телефон",
      personalDetails: "Особисті дані",
      pocket: "Пакет",
      popupMap: "Фабрика конвертів Куверт-Україна",
      placeholderPrintform:
        "Напишіть нам бажаний розмір обраної продукції, колір та щільність паперу, кількість кольорів друку та інші параметри, які вважаєте необхідними.",
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
      printParam: "чисті чи з друком (вкажіть кількість кольорів)",
      productLabeling: "Маркування товару",
      product: "Виріб",
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
      sale: "Розпродаж",
      salesDep: "Відділ збуту",
      size: "Розмір",
      seoHome: "Головна",
      seoAbout: "Про нас",
      seoProducts: "Продукція",
      seoDocufix: "Конверти для супровідних документів",
      seoInquiry: "Тип запиту",
      seoThanx: "Дякуємо!",
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
      stericlinPack: "Пакети без бічних складок",
      stericlinPackSide: "Пакети з бічними складками",
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
      windowParam:
        "наявність вікна (вікон), його (їх) розміри та розміщення на конверті",
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
      uah: "грн",
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
      accept: "Accept",
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
      accountDep: "Accounting department",
      airpoc: "Air padded envelopes",
      airpocText:
        "Padded envelopes with polyethylene air inserts, which guarantees reliable protection for sending fragile and valuable items.",
      amount: "Amount, pcs",
      banderole: "Banderole pockets",
      basicOrder: "Warehouse inquiry",
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
      cookiesText:
        "We use cookies on our website. Some of them are essential, while others help us to improve this website and your experience.",
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
        "Transparent polyethylene envelopes with an adhesive layer on back side and with a detachable tape on the valve. You no longer need to send additional documents for goods by mail, just put them in such an envelope and stick it on a box or pallet.",
      distributionProducts:
        "Distribution of advertising or information products",
      disableWorkers:
        "10% of workers in our factory are people with disabilities",
      ecoblock: "Eco block for notes",
      ecobagColor: "Colored paper bags with paper handles",
      ecobagWhite: "White paper bags with paper handles",
      ecobagBrown: "Brown paper bags with paper handles",
      ecobagText:
        "Paper bags with paper handles manufactured by Polish factory <a href='https://ecobagnetwork.eu/' target='_blank rel='nofollow'>Ecobag Network</a> are made of durable paper that can withstand a weight of up to 3-8 kg (depending on size) and do not deteriorate from moisture. Ecological and comfortable packaging of products.",
      ecobagProperties: {
        handles: {
          twisted: "twisted",
          flat: "flat",
        },

        color: {
          white: "white",
          brown: "brown",
          black: "black",
          lightblue: "light blue",
          mint: "mint",
          rose: "rose",
          yellow: "yellow",
          green: "green",
          blue: "blue",
          red: "red",
        },
        paperType: {
          ribbed: "ribbed",
          smooth: "smooth",
        },
      },
      enterAmount: "Enter amount",
      enterAmountText:
        "Specify the amount of envelopes you would like to order",
      envelope: "Envelope",
      envelopes: "Envelopes",
      envelopesProperties: {
        sealing: {
          gummed: "Gummed",
          selfSeal: "Self Seal",
          peelSeal: "Peel & Seal",
        },
        type: {
          envelope: "Envelope",
          pocket: "Pocket",
        },
        color: {
          white: "white",
          brown: "brown",
          orange: "orange",
          red: "red",
          yellowBlue: "yellow & blue",
          coral: "coral",
          rose: "rose",
          green: "green",
          pastelYellow: "pastel yellow",
          pastelBlue: "pastel blue",
          pastelLavender: "pastel lavender",
          pastelMint: "pastel mint",
          pastelRose: "pastel rose",
          pastelCreme: "pastel creme",
        },
        print: {
          gray: "gray",
        },
      },
      envelopesStandard: "Straight flap",
      envelopeSize: "envelope size",
      envelopeDetails: "Envelope details",
      emptyCartText: "Add products from the Products page.",
      extensionEnvelopes: "Pockets with extension",
      extensionEnvelopesText:
        "Pockets with extension are made of durable kraft paper, they are convenient for sending bulky investments: books, magazines, a large amount of documentation. The extension is 40 mm.",
      format: "Format",
      greetingLetters: "Greeting letters",
      handleType: "Handle type",
      height: "Height, mm",
      historyP1:
        "The envelope factory «Kuvert-Ukraine» belongs to the concern «Mayer-Kuvert-network» and is the largest manufacturer of postal envelopes and packages in Ukraine since 1999. Cooperation with European suppliers ensures high-quality raw materials. We work hard to improve all processes, the factory has a technology of waste-free production, which leaves an ecological footprint as small as possible.",
      historyP2:
        "Kuvert-Ukraine offers consumers the widest range of mail envelopes and packages, unique patented products and innovations in the field of advertising envelope, permanent warehouse stocks and certified quality control.",
      homepage: "Back to homepage",
      hospital: "Hospitals and clinics",
      from: "from",
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
      individualRequestText:
        "If you do not found something that interests you among the standard products, write us your wishes about envelope and we will consider the possibility of its production. We recommend that you specify:",
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
      letterhead: "Letterhead",
      mainSlogan: "Envelope creates a first impression",
      missionTitle: "Our mission",
      mission:
        "We are industry leaders and take on any challenge to provide our customers with excellent workmanship and the best results possible thanks to the powerful technical and technological production, professionalism and well-coordinated work of the team, care for the environment in production and processing capabilities.",
      message: "Message",
      messageText: "Write your message here",
      metaDescrIndex:
        "«Kuvert-Ukraine» is the Ukrainian part of the largest in Europe concern for the production of envelopes, parcel bags and paper bags «Mayer-Kuvert-network».",
      metaDescrEnvelopes:
        "Buy envelopes in bulk in all colours and sizes to get the best value. Plenty of stock, fast delivery and excellent service.",
      metaDescrPaperbags:
        "Looking for paper bags at wholesale prices? We have a great selection of paper bags for all your needs. Order now!",
      metaDescrPrinted:
        "Printing on envelopes, parcel bags and paper bags. Print your logo or your own design to make them noticeable.",
      metaDescrIndividual:
        "Create your own envelope with individual settings and a print that will stand out among others and draw attention to your message.",
      metaDescrContact:
        "Need envelope, paper bags or parcel packages? Contact us online or call us today!",
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
      paperParam: "paper color and density or brand of paper",
      paperbags: "Paper bags",
      paperbagsWhite: "White paper bags",
      paperbagsBrown: "Brown paper bags",
      paperbagsColor: "Color paper bags",
      paperfile: "Paper filing pockets",
      paperType: "Paper",
      phone: "Phone",
      personalDetails: "Personal details",
      pocket: "Pocket",
      popupMap: "Kuvert-Ukraine envelope factory",
      placeholderPrintform:
        "Tell us required product size, paper color and GSM, how much printing colors and any other details you think is necessary.",
      price: "Price",
      print: "Print",
      printDetails: "Print details",
      printedOrder: "Printed request",
      printedOrderText:
        "If you want products with your own printing, this option is for you.",
      printMockup: "Print sample (not necessary)",
      printProducts: "Printed products",
      printProductsText:
        "We offer professional printing on envelopes and paper bags - the company logo, address, etc. Depending on the purpose, image requirements and your budget we carry out three types of printing.",
      printParam: "blank or printed (specify the number of colors)",
      productionDep: "Production department",
      productLabeling: "Product labeling",
      product: "Product",
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
      sale: "Sale",
      salesDep: "Sales department",
      size: "Size",
      seoHome: "Home",
      seoAbout: "About us",
      seoProducts: "Products",
      seoDocufix: "Document Enclosed Wallets Envelopes",
      seoInquiry: "Inquiry type",
      seoThanx: "Thank you!",
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
      stericlinPack: "Packages without side folds",
      stericlinPackSide: "Packages with side folds",
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
      windowParam:
        "the presence of the window (windows), its (their) size and placement on the envelope",
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
      uah: "UAH",
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
