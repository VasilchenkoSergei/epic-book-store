// // function ready(fn) {
// //   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
// //     fn();
// //   } else {
// //     document.addEventListener('DOMContentLoaded', fn);
// //   }
// // }
// //
// // ready(function(){
// //   console.log('DOM ready');
// // });



// $(document).ready(function(){

// $('.promo__burger').on('click', function() {
//   $('.main-nav').toggleClass('.active');
//   $('.main-nav').toggle();
// });

// // !!!!!!!!!!!!!!SLIDER!!!!!!!!!!!!!!!!!!!!


// $('.slider').owlCarousel ({
//   dots: false,
//   loop: true,
//   center: true,
//   nav: true,
//   responsive : {
//       0 : {
//           items : 1,
//           navText: ["<img src='img/icons/arrow_left.svg'>", "<img src='img/icons/arrow_right.svg'>"],
//       }
//   }

// });

// $('.catalog__tabs').owlCarousel ({
//   dots: false,
//   loop: true,
//   center: false,
//   nav: false

// });
// // $('.sizebox-list').owlCarousel ({
// //   loop: true,
// //   responsive : {
// //       0 : {
// //           items : 1,
// //       },
// //   }
// // });

// // $('.appearbox-list').owlCarousel ({
// //   loop: true,
// //   margin: 10,
// //   responsive : {
// //       0 : {
// //           items : 1,
// //       },
// //       767 : {
// //           items : 2,
// //           dots: false,
// //           nav: true,
// //           navText: ["<img src='img/icons/left-icon.svg'>", "<img src='img/icons/right-icon.svg'>"],
// //       }
// //   }
// // });

// // $('.reviews__list').owlCarousel ({
// //   loop: true,
// //   dots: true,
// //   responsive : {
// //       0 : {
// //           items : 1,
// //       },
// //       950 : {
// //           items : 1,
// //           dots: false,
// //           nav: true,
// //           navText: ["<img src='img/icons/left-icon.svg'>", "<img src='img/icons/right-icon.svg'>"],
// //       }
// //   }
// // });




// });





const data = {
      books: [
        {
          author: 'Гарет Мур',
          name: 'Латеральная логика',
          price: '500',
          src: 'book-lateralnaya-logika',
          alt: 'Латеральная логика',
          descr: 'Головоломный путь к нестандартному мышлению'
        },
        {
          author: 'Даниел Левитин',
          name: 'Путеводитель по лжи',
          price: '630',
          src: 'book-putevoditel-po-lzhi',
          alt: 'Путеводитель по лжи',
          descr: 'Критическое мышление в эпоху постправды'
        },
        {
          author: 'Фритьоф Капра',
          name: 'Дао физики',
          price: '500',
          src: 'book-dao-fiziki',
          alt: 'Дао физики',
          descr: 'Исследование параллелей между современной физикой и восточной философией'
        },
        {
          author: 'Гарет Мур',
          name: 'Не очевидно',
          price: '365',
          src: 'book-ne-ochevidno',
          alt: 'Не очевидно',
          descr: 'Как выявлять тренды раньше других'
        },
        {
          author: 'Эдди Юн',
          name: 'Суперпотребители',
          price: '500',
          src: 'book-superpotrebiteli',
          alt: 'Суперпотребители',
          descr: 'Кто это и почему они так важны для вашего бизнеса'
        },
        {
          author: 'Дамир Халилов',
          name: 'Маркетинг в социальных сетях',
          price: '630',
          src: 'book-social-media-marketing',
          alt: 'Маркетинг в социальных сетях',
          descr: ''
        },
        {
          author: 'Джон Хэммонд, Ральф Клин, Говард Райффе',
          name: 'Правильный выбор',
          price: '560',
          src: 'book-pravilnyij-vyibor',
          alt: 'Правильный выбор',
          descr: 'Практическое руководство по принятию взвешенных решений'
        },
        {
          author: 'Гарет Мур',
          name: 'Главное в истории искусств',
          price: '365',
          src: 'book-glavnoe-v-istorii-iskusstv',
          alt: 'Главное в истории искусств',
          descr: 'Ключевые работы, темы, направления, техники'
        },
        {
          author: 'Максим Батырев',
          name: '45 татуировок продавана',
          price: '365',
          src: '45-tatuirovok-prodavana',
          alt: '45 татуировок продавана',
          descr: 'Правила для тех, кто продает и управляет продажами'
        },
        {
          author: 'Терри Харрисон',
          name: 'Акварельные пейзажи',
          price: '430',
          src: 'akvarelnye-peyzazhi',
          alt: 'Акварельные пейзажи',
          descr: 'Основы, техники, эксперименты'
        },
        {
          author: 'Карл Андерсон',
          name: 'Аналитическая культура',
          price: '560',
          src: 'analiticheskaya-kultura',
          alt: 'Аналитическая культура',
          descr: 'От сбора данных до бизнес-результатов'
        },
        {
          author: 'Крис вудфорд',
          name: 'Атомы у нас дома',
          price: '500',
          src: 'atomy-u-nas-doma',
          alt: 'Атомы у нас дома',
          descr: 'Удивительная наука за повседневными вещами'
        },
        {
          author: 'Сергей Абдульманов, Дмирий Кибкало, Дмитрий Борисов',
          name: 'Бизнес как игра',
          price: '500',
          src: 'biznes-kak-igra',
          alt: 'Бизнес как игра',
          descr: 'Грабли российского бизнеса и неожиданные решения'
        },
        {
          author: 'Брюс Тулган',
          name: 'Быть начальником - это нормально',
          price: '400',
          src: 'byt-nachalnikom-eto-normalno',
          alt: 'Быть начальником - это нормально',
          descr: 'Пошаговый план, который поможет вам стать тем менеджером, в котором нуждается ваша команда'
        },
        {
          author: 'Деннис Бакке',
          name: 'Человек решающий',
          price: '420',
          src: 'chelovek-reshayuschiy',
          alt: 'Человек решающий',
          descr: 'Как построить организацию будущего, где решения принимает каждый'
        },
        {
          author: 'Джон Лоуз',
          name: 'Дневник художника-натуралиста',
          price: '610',
          src: 'dnevnik-khudozhnika-naturalista',
          alt: 'Дневник художника-натуралиста',
          descr: 'Как рисовать животных, птиц, растения и пейзажи'
        },
        {
          author: 'Дэвид Ульрих',
          name: 'Дзен-камера',
          price: '360',
          src: 'dzen-kamera',
          alt: 'Дзен-камера',
          descr: 'Шесть уроков творческого развития и осознанности'
        },
        {
          author: 'Сет Годин',
          name: 'Фиолетовая корова',
          price: '490',
          src: 'fioletovaya-korova',
          alt: 'Фиолетовая корова',
          descr: 'Сделайте свой бизнес выдающимся!'
        },
        {
          author: 'Владимир Моженков',
          name: 'Ген директора',
          price: '700',
          src: 'gen-direktora',
          alt: 'Ген директора',
          descr: '17 правил позитивного менеджмента по-русски'
        },
        {
          author: 'Эстанислао Бахрах',
          name: 'Гибкий ум',
          price: '510',
          src: 'gibkiy-um',
          alt: 'Гибкий ум',
          descr: 'Как видеть вещи иначе и думать нестандартно'
        },
        {
          author: 'Сьюзи Ходж',
          name: 'Главное в истории искусств',
          price: '540',
          src: '45-tatuirovok-prodavana',
          alt: '',
          descr: ''
        },
        {
          author: 'Чарльз Уилан',
          name: 'Голая экономика',
          price: '510',
          src: 'golaya-ekonomika',
          alt: 'Голая экономика',
          descr: 'Разоблачение унылой науки'
        },
        {
          author: 'Максим Котин',
          name: 'И ботаники делают бизнес 1+2',
          price: '290',
          src: 'i-botaniki-delayut-biznes-1-2',
          alt: 'И ботаники делают бизнес 1+2',
          descr: 'Удивительная история основателя "Додо Пиццы" Федора Овчинникова: от провала до миллиона'
        },
        {
          author: 'Виталий Мышляев',
          name: 'iМаркетинг',
          price: '560',
          src: 'imarketing',
          alt: 'iМаркетинг',
          descr: 'Работаем по системе'
        },
        {
          author: 'Игорь Манн, Анна Турусина, Екатерина Уколова',
          name: 'Инструменты маркетинга для отдела продаж',
          price: '360',
          src: 'instrumenty-marketinga-dlya-otdela-prodazh',
          alt: 'Инструменты маркетинга для отдела продаж',
          descr: ''
        },
        {
          author: 'Максим Недякин',
          name: 'Искренний сервис',
          price: '450',
          src: 'iskrenniy-servis',
          alt: 'Искренний сервис',
          descr: 'Как мотивировать сотрудников сделать для клиента больше, чем достаточно'
        },
        {
          author: 'Сидни Люмет',
          name: 'Как делается кино',
          price: '800',
          src: 'kak-delaetsya-kino',
          alt: 'Как делается кино',
          descr: ''
        },
        {
          author: 'Джордан Элленберг',
          name: 'Как не ошибаться',
          price: '520',
          src: 'kak-ne-oshibatsya',
          alt: 'Как не ошибаться',
          descr: 'Сила математического мышления'
        },
        {
          author: 'Дэвид Аллен',
          name: 'Как привести дела в порядок',
          price: '370',
          src: 'kak-privesti-dela-v-poryadok',
          alt: 'Как привести дела в порядок',
          descr: 'Искусство продуктивности без стресса'
        },
        {
          author: 'Лиза Фельдман Барретт',
          name: 'Как рождаются эмоции',
          price: '380',
          src: 'kak-rozhdayutsya-emotsii',
          alt: 'Как рождаются эмоции',
          descr: 'Революция в понимании мозга и управлении эмоциями'
        },
        {
          author: 'Ха Джун Чанг',
          name: 'Как устроена экономика',
          price: '330',
          src: 'kak-ustroena-ekonomika',
          alt: 'Как устроена экономика',
          descr: 'Как мы здесь оказались?'
        },
        {
          author: 'Карл Сьюэлл, Пол Браун',
          name: 'Клиенты на всю жизнь',
          price: '295',
          src: 'klienty-na-vsyu-zhizn',
          alt: 'Клиенты на всю жизнь',
          descr: ''
        },
        {
          author: 'Нелли Литвак, Андрей Райгородский',
          name: 'Кому нужна математика',
          price: '370',
          src: 'komu-nuzhna-matematika',
          alt: 'Кому нужна математика',
          descr: 'Понятная книга о том, как устроен цифровой мир'
        },
        {
          author: 'Институт Арбингера',
          name: 'Лидерство и самообман',
          price: '300',
          src: 'liderstvo-i-samoobman',
          alt: 'Лидерство и самообман',
          descr: 'Жизнь, свободная от шор'
        },
        {
          author: 'Юрген Вольф',
          name: 'Литературный мастер-класс',
          price: '390',
          src: 'literaturnyy-master-klass',
          alt: 'Литературный мастер-класс',
          descr: 'Учитесь у Толстого, Чехова, Диккенса, Хемингуэя и многих других современных и классических авторов'
        },
        {
          author: 'Игорь Манн',
          name: 'Маркетинг без бюджета',
          price: '380',
          src: 'marketing-bez-byudzheta',
          alt: 'Маркетинг без бюджета',
          descr: '50 работающих инструментов'
        },
        {
          author: 'Игорь Манн',
          name: 'Маркетинг на 100%',
          price: '440',
          src: 'marketing-na-100-remiks',
          alt: 'Маркетинг на 100%',
          descr: 'Как стать хорошим менеджером по маркетингу'
        },
        {
          author: 'Роджер Бест',
          name: 'Маркетинг от потребителя',
          price: '410',
          src: 'marketing-ot-potrebitelya',
          alt: 'Маркетинг от потребителя',
          descr: ''
        },
        {
          author: 'Нир Эяль, Райан Хувер',
          name: 'Hooked на крючке',
          price: '880',
          src: 'na-kryuchke',
          alt: 'Hooked на крючке',
          descr: 'Как создавать продукты, формирующие привычки'
        },
        {
          author: 'Дональд Рос',
          name: 'Не делай это',
          price: '550',
          src: 'ne-delay-eto',
          alt: 'Не делай это',
          descr: 'Тайм-менеджмент для творческих людей'
        },
        {
          author: 'Кевин Келли',
          name: 'Неизбежно',
          price: '660',
          src: 'neizbezhno',
          alt: 'Неизбежно',
          descr: '12 психологических трендов, которые определяют наше будущее'
        },
        {
          author: 'Роберт Киган, Лиза Лэйхи',
          name: 'Неприятие перемен',
          price: '480',
          src: 'nepriyatie-peremen',
          alt: 'Неприятие перемен',
          descr: 'Как преодолеть сопротивление изменениям и раскрыть потенциал организации'
        },
        {
          author: 'Ричард Талер, Касс Санстейн',
          name: 'Nudge',
          price: '770',
          src: 'nudge',
          alt: 'Nudge',
          descr: 'Как улучшить наши решения о здоровье, благосостоянии и счастье'
        },
        {
          author: 'Сатья Наделла',
          name: 'Hit refresh Обновить страницу',
          price: '710',
          src: 'obnovit-stranitsu',
          alt: 'Hit refresh Обновить страницу',
          descr: 'О трансформации Microsoft и технологиях будущего от первого лица'
        },
        {
          author: 'Нассим Талеб',
          name: 'Одураченные случайностью',
          price: '560',
          src: 'odurachennye-sluchaynostyu',
          alt: 'Одураченные случайностью',
          descr: 'О скрытой роли шанса в бизнесе и в жизни'
        },
        {
          author: 'Дэвид Огилви',
          name: 'О рекламе',
          price: '990',
          src: 'ogilvi-o-reklame',
          alt: 'О рекламе',
          descr: ''
        },
        {
          author: 'Семен Кибало',
          name: 'Охотник за идеями',
          price: '910',
          src: 'okhotnik-za-ideyami',
          alt: 'Охотник за идеями',
          descr: 'Как найти дело жизни и сделать мир лучше'
        },
        {
          author: 'Анна Рольская',
          name: 'Основы каллиграфии и леттеринга',
          price: '720',
          src: 'osnovy-kalligrafii-i-letteringa',
          alt: 'Основы каллиграфии и леттеринга',
          descr: 'Прописи'
        },
        {
          author: 'Институт Арбингера',
          name: 'Открытое мышление',
          price: '930',
          src: 'otkrytoe-myshlenie',
          alt: 'Открытое мышление',
          descr: 'Как выйти за пределы своей точки зрения'
        },
        {
          author: 'Бо Лотто',
          name: 'Преломление',
          price: '480',
          src: 'prelomlenie',
          alt: 'Преломление',
          descr: 'Наука видеть иначе'
        },
        {
          author: 'Пол Клейнман',
          name: 'Психология',
          price: '630',
          src: 'psikhologiya',
          alt: 'Психология',
          descr: 'Краткий обзор основных достижений науки о душе'
        },
        {
          author: 'Роберт Чалдини, Ноа Гольдштейн, Стив Мартин',
          name: 'Психология убеждения',
          price: '600',
          src: 'psikhologiya-ubezhdeniya',
          alt: 'Психология убеждения',
          descr: '50 доказанных способов быть убедительным'
        },
        {
          author: 'Джеймс Глик',
          name: 'Путешествия во времени',
          price: '570',
          src: 'puteshestviya-vo-vremeni',
          alt: 'Путешествия во времени',
          descr: 'История'
        },
        {
          author: 'Питер Сенге',
          name: 'Пятая дисциплина',
          price: '480',
          src: 'pyataya-distsiplina',
          alt: 'Пятая дисциплина',
          descr: 'Искусство и практика обучающейся организации'
        },
        {
          author: 'Деннис Бакке',
          name: 'Работа в радость',
          price: '410',
          src: 'rabota-v-radost',
          alt: 'Работа в радость',
          descr: 'Бизнес-модель будущего'
        },
        {
          author: 'Майкл Микалко',
          name: 'Рисовый штурм',
          price: '220',
          src: 'risovyy-shturm-i-esche-21-sposob-myslit-nestandartno',
          alt: 'Рисовый штурм',
          descr: 'И еще 21 способ мыслить нестандартно'
        },
        {
          author: 'Джефф Сазерленд',
          name: 'Scrum',
          price: '730',
          src: 'scrum',
          alt: 'Scrum',
          descr: 'Революционный метод управления проектами'
        },
        {
          author: 'Чип Хиз, Дэн Хиз',
          name: 'Сделано, чтобы прилипать',
          price: '230',
          src: 'sdelano-chtoby-prilipat',
          alt: 'Сделано, чтобы прилипать',
          descr: 'Почему одни идеи выживают, а другие умирают'
        },
        {
          author: 'Джой Ито, Джефф Хоуи',
          name: 'Сдвиг',
          price: '930',
          src: 'sdvig',
          alt: 'Сдвиг',
          descr: 'Как выжить в стремительном будущем'
        },
        {
          author: 'Станислав Шекшня, Кирилл Кравченко, Элин Уильямс',
          name: 'Школа СЕО',
          price: '630',
          src: 'shkola-ceo',
          alt: 'Школа СЕО',
          descr: 'Мастер-класс от 20 глобальных бизнес-лидеров'
        },
        {
          author: 'Саймон Сингх',
          name: 'Симпсоны и их математические секреты',
          price: '520',
          src: 'simpsony-i-ikh-matematicheskie-sekrety',
          alt: 'Симпсоны и их математические секреты',
          descr: 'Математические шутки из "Футурамы"'
        },
        {
          author: 'Александр Шумович, Алексей Берлов',
          name: 'Смешать, но не взбалтывать',
          price: '560',
          src: 'smeshat-no-ne-vzbaltyvat',
          alt: 'Смешать, но не взбалтывать',
          descr: 'Рецепты организации мероприятия'
        },
        {
          author: 'Марта Олдерсон',
          name: 'Создавая бестселлер',
          price: '470',
          src: 'sozdavaya-bestseller',
          alt: 'Создавая бестселлер',
          descr: 'Шаг за шагом к захватывающему сюжету, сильной сцене и цельной композиции'
        },
        {
          author: 'Юрген Саленбахер',
          name: 'Creative personal branding',
          price: '710',
          src: 'sozdayte-lichnyy-brend',
          alt: 'Creative personal branding',
          descr: 'Создайте личный бренд'
        },
        {
          author: 'Виталий Александров',
          name: 'Стретегия email-маркетинга',
          price: '490',
          src: 'strategiya-e-mail-marketinga',
          alt: 'Стретегия email-маркетинга',
          descr: 'Эффективные рассылки для вашего бизнеса'
        },
        {
          author: 'В. Чан Ким, Рене Моборн',
          name: 'Стретегия глубокого океана',
          price: '730',
          src: 'strategiya-golubogo-okeana',
          alt: 'Стретегия глубокого океана',
          descr: 'Как найти или создать рынок, свободный от других проектов'
        },
        {
          author: 'Авинаш Диксит, Барри Нейлбафф',
          name: 'Теория игр',
          price: '820',
          src: 'teoriya-igr',
          alt: 'Теория игр',
          descr: 'Искусство стратегического мышления в бизнесе и жизни'
        },
        {
          author: 'Кен Уилбер',
          name: 'Трамп и эпоха постправды',
          price: '680',
          src: 'tramp-i-epokha-postpravdy',
          alt: 'Трамп и эпоха постправды',
          descr: ''
        },
        {
          author: 'Роман Тарасенко',
          name: 'Ценные решения',
          price: '110',
          src: 'tsennye-resheniya',
          alt: 'Ценные решения',
          descr: 'Как работать с ценами, чтобы прибыль росла'
        },
        {
          author: 'Джон Вудкок',
          name: 'Цветовой квест города',
          price: '290',
          src: 'tsvetovoy-kvest-goroda',
          alt: 'Цветовой квест города',
          descr: '30 непростых картин по номерам'
        },
        {
          author: 'Стивен Строгац',
          name: 'Удовольствие от Х',
          price: '270',
          src: 'udovolstvie-ot-x',
          alt: 'Удовольствие от Х',
          descr: 'Увлекательная экскурсия в мир математики от одного из лучших преподавателей в мире'
        },
        {
          author: 'Игорь Йосифович, Джудит де Граф',
          name: 'Urban Jungle',
          price: '360',
          src: 'urban-jungle',
          alt: 'Urban Jungle',
          descr: 'Как создать уютный интерьер с помощью растений'
        },
        {
          author: 'Кирилл Горский',
          name: 'В эфире - сарафанное радио',
          price: '750',
          src: 'v-efire-sarafannoe-radio',
          alt: 'В эфире - сарафанное радио',
          descr: 'Практическое руководство по рекомендательному маркетингу'
        },
        {
          author: 'Лора Стэк',
          name: 'Вместе быстрее',
          price: '680',
          src: 'vmeste-bystree',
          alt: 'Вместе быстрее',
          descr: '12 принципов командной эффективности'
        },
        {
          author: 'Брюс Тулган',
          name: 'Все начальники делают это',
          price: '890',
          src: 'vse-nachalniki-delayut-eto',
          alt: 'Все начальники делают это',
          descr: 'Пошаговое руководство по решению всех проблем менеджера'
        },
        {
          author: 'Фил Барден',
          name: 'Взлом маркетинга',
          price: '460',
          src: 'vzlom-marketinga',
          alt: 'Взлом маркетинга',
          descr: 'Наука о том, почему мы покупаем'
        },
        {
          author: 'Стив Роулинг',
          name: 'Я хочу больше идей',
          price: '770',
          src: 'ya-khochu-bolshe-idey',
          alt: 'Я хочу больше идей',
          descr: 'Более 100 техник и упражнений для развития творческого мышления'
        },
        {
          author: 'Йона Бергер',
          name: 'Заразительный',
          price: '720',
          src: 'zarazitelnyy',
          alt: 'Заразительный',
          descr: 'Психология сарафанного радио'
        },
        {
          author: 'Ха Джун Чанг',
          name: 'Злые Самаритяне',
          price: '530',
          src: 'zlye-samarityane',
          alt: 'Злые Самаритяне',
          descr: 'Миф о свободной торговле и секретная история капитализма'
        }
      ]
    };


// const cards = document.querySelector('.catalog__block')

//       function createCards(data) {
//           const booksArr = data.books;
//           let cardString = ``;

//           booksArr.forEach(function(book) {
//             cardString = cardString + `<article class="product-card-mini">
// 											<a class="product-card-mini__picture-wrap" href="#">
// 											    <picture class="product-card-mini__picture">
// 											    <img class="product-card-mini__img" src="img/book-lateralnaya-logika.jpg" alt="book-lateralnaya-logika" width="210" height="300"></picture>
// 											</a>
// 											<a class="product-card-mini__title-wrap" href="">
// 											    <h3 class="product-card-mini__title">${book.name}</h3>
// 											</a>
// 											<p class="product-card-mini__text">${book.descr}</p>
// 											<span class="product-card-mini__price">${book.price} &#8381;</span>
// 										</article>`
//           });
          
//           return cardString;
//       }

//         createCards(data);
      

//       function insertElements(data, wrap) {
//         const html = createCards(data);
//         wrap.innerHTML = html;
//       };
      
//         insertElements(data, cards);






        //2ой вариант

const cardsWrap = document.querySelector('.catalog__block')

      function createCard(book) {
          const card = document.createElement('article');
          card.classList.add('product-card-mini');

          card.innerHTML = `<article class="product-card-mini">
                              <a class="product-card-mini__picture-wrap" href="#">
                                  <picture class="product-card-mini__picture">
                                  <img class="product-card-mini__img" src="img/${book.src}.png" alt="${book.alt}" width="210" height="300"></picture>
                              </a>
                              <a class="product-card-mini__title-wrap" href="">
                                  <h3 class="product-card-mini__title">${book.name}</h3>
                              </a>
                              <p class="product-card-mini__text">${book.descr}</p>
                              <span class="product-card-mini__price">${book.price} &#8381;</span>
                            </article>`;
                    
          return card;
      }

      function insertElements(obj, wrap) {
        const booksArr = obj.books;
        console.log(booksArr);

        booksArr.forEach((book) => {
          const card = createCard(book);
          console.log(card);

          wrap.appendChild(card);
        })
      }

      if (cardsWrap) {
        insertElements(data, cardsWrap);
      }