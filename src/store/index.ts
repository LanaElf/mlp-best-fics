import { createStore } from 'vuex'

export default createStore({
  state: {
      ficHtml: 'Loading...',
      sortedFics: [],
      fiteredByGenre: [],
      fiteredByCharacter: [],
      noFilter: true,
      genreFilter: false,
      characterFilter: false,
      isFicLoading: false,
      bookshelfVisible: true,
      themeListOpened: false,
      selectedGenre: '',
      selectedCharacter: '', 

      lyra: [
        {
            name: 'Lyra',
            path: '/src/arts/lyra.png'
        }
      ],



      themes:[
        {
          id:1,
          name: 'Fluttershy',
          isActive: true,
          buttonStyle: 'background: teal; color: #fcfcc5;',
        },
        {
          id:2,
          name: 'Twilight Sparkle',
          isActive: false,
          buttonStyle: 'background: #400080; color: #f0d2fc;',
        },
        {
          id:3,
          name: 'Princess Celestia',
          isActive: false,
          buttonStyle: 'background: #fef8d5; color: #9f5bbb;',
        },
        {
          id:4,
          name: 'Princess Luna',
          isActive: false,
          buttonStyle: 'background: #1c0054; color: #e3f0ff;',
        },
        
      ],


      libArray: [
                              
              {
                id: 1,
                name: 'Фоновая пони',
                pathName: 'Fonovaya_Pony',
                wordCount: 395729,
                chaptersCount: 20,
                authorName: 'Allottho',
                authorLink: 'https://tabun.everypony.ru/profile/Allottho/',
                genres: ['Ангст', 'Повседневность','Ужасы'],
                cover: 'background: linear-gradient(343deg, rgba(69,232,223,0.7) 56%, rgba(157,255,212,0.7) 100%);',
                sourceLink: 'https://ponyfiction.org/story/144/',
                path: '/fonovayaPony',
                characters: [
                    {
                        name:'Lyra Heartstrings', 
                        path: '/ponies/lyra.png'
                    },
                ],
                chapters: [
                  {
                        id: 1,
                        name: 'I - Мелодичная',
                        path: '/library/Fonovaya_Poni/01_I_Melodichnaya.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'II - Сон безумца',
                        path: '/library/Fonovaya_Poni/02_II_Son_Bezumtsa.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 3,
                        name: 'III - Основы',
                        path: '/library/Fonovaya_Poni/03_III_Osnovy.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 4,
                        name: 'IV - Симфония одиночества',
                        path: '/library/Fonovaya_Poni/04_IV_Simfoniya_Odinochestva.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    {
                        id: 5,
                        name: 'V - Индустрия',
                        path: '/library/Fonovaya_Poni/05_V_Industriya.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 6,
                        name: 'VI - Герои и Барды',
                        path: '/library/Fonovaya_Poni/06_VI_Geroi_i_Bardy.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                    {
                        id: 7,
                        name: 'VII - Переход',
                        path: '/library/Fonovaya_Poni/07_VII_Perekhod.html',
                        anchor: '#VII',
                        content: '',
                        link: '<div id="VII"></div>',
                    },
                    {
                        id: 8,
                        name: 'VIII - Все пони созданы быть любимыми',
                        path: '/library/Fonovaya_Poni/08_VIII_Vse_poni_sozdany_byt_lybimymi.html',
                        anchor: '#VIII',
                        content: '',
                        link: '<div id="VIII"></div>',
                    },
                    {
                        id: 9,
                        name: 'IX - Небесные тверди',
                        path: '/library/Fonovaya_Poni/09_IX_Nebesnye_Tverdi.html',
                        anchor: '#IX',
                        content: '',
                        link: '<div id="IX"></div>',
                    },
                    {
                        id: 10,
                        name: 'X - Зеленый - это новый розовый',
                        path: '/library/Fonovaya_Poni/10_X_Zelenyy_eto_novyy_rozovyy.html',
                        anchor: '#X',
                        content: '',
                        link: '<div id="X"></div>',
                    },
                    {
                        id: 11,
                        name: 'XI - Неспетый',
                        path: '/library/Fonovaya_Poni/11_XI_Nespetyy.html',
                        anchor: '#XI',
                        content: '',
                        link: '<div id="XI"></div>',
                    },
                    {
                        id: 12,
                        name: 'XII - Какой звук издает камень',
                        path: '/library/Fonovaya_Poni/12_XII_Kakoy_zvuk_izdaet_kamen_.html',
                        anchor: '#XII',
                        content: '',
                        link: '<div id="XII"></div>',
                    },
                    {
                        id: 13,
                        name: 'XIII - Проще, чем чувствовать',
                        path: '/library/Fonovaya_Poni/13_XIII_Proshche_chem_chuvstvovat_.html',
                        anchor: '#XIII',
                        content: '',
                        link: '<div id="XIII"></div>',
                    },
                    {
                        id: 14,
                        name: 'XIV - Проклятье девятой',
                        path: '/library/Fonovaya_Poni/14_XIV_Proklyat_e_Devyatoy.html',
                        anchor: '#XIV',
                        content: '',
                        link: '<div id="XIV"></div>',
                    },
                    {
                        id: 15,
                        name: 'XV - Быть рядом',
                        path: '/library/Fonovaya_Poni/15_XV_Byt_ryadom.html',
                        anchor: '#XV',
                        content: '',
                        link: '<div id="XV"></div>',
                    },
                    {
                        id: 16,
                        name: 'XVI - Возлюбленный',
                        path: '/library/Fonovaya_Poni/16_XVI_Vozlyblennyy.html',
                        anchor: '#XVI',
                        content: '',
                        link: '<div id="XVI"></div>',
                    },
                    {
                        id: 17,
                        name: 'XVII - Все, что ушло от тебя',
                        path: '/library/Fonovaya_Poni/17_XVII_Vse_chto_ushlo_ot_tebya_.html',
                        anchor: '#XVII',
                        content: '',
                        link: '<div id="XVII"></div>',
                    },
                    {
                        id: 18,
                        name: 'XVIII - Крещендо',
                        path: '/library/Fonovaya_Poni/18_XVIII_Kreshchendo.html',
                        anchor: '#XVIII',
                        content: '',
                        link: '<div id="XVIII"></div>',
                    },
                    {
                        id: 19,
                        name: 'XIX - Диминуэндо',
                        path: '/library/Fonovaya_Poni/19_XIX_Diminuendo.html',
                        anchor: '#XIX',
                        content: '',
                        link: '<div id="XIX"></div>',
                    },
                    {
                        id: 20,
                        name: 'XX - Исход',
                        path: '/library/Fonovaya_Poni/20_XX_Iskhod.html',
                        anchor: '#XX',
                        content: '',
                        link: '<div id="XX"></div>',
                    },
                ],
              },
              {
                id: 2,
                name: 'Сломанная игрушка',
                pathName: 'Slomannaya_Igrushka',
                wordCount: 143638,
                chaptersCount: 27,
                authorName: 'DarkKnight',
                authorLink: 'https://tabun.everypony.ru/profile/DarkKnight/',
                genres: ['Ангст', 'Sci-fi','Драма', 'Приключения', 'Романтика', 'Экшн', 'Сломанная игрушка', 'AU', 'Мир Земли', 'Будущее', 'Смерть персонажей'],
                sourceLink: 'https://ponyfiction.org/story/5410/',
                cover: 'background: linear-gradient(343deg, rgba(41,41,41,0.7) 35%, rgba(157,255,237,0.7) 100%);',
                path: '/library/Slomannaya_Igrushka/',
                characters: [
                    {
                        name:'Lyra Heartstrings', 
                        path: '/ponies/lyra.png'
                    },
                    {
                        name: 'Rainbow Dash',
                        path: '/ponies/rainbow_dash.png'
                    },
                    {
                        name: 'Scootaloo',
                        path: '/ponies/scootaloo.png'
                    },
                    {
                        name: 'Other ponies',
                        path:'/ponies/other.png'
                    },
                    {
                        name:'Human(s)', 
                        path: '/ponies/human.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'Пролог',
                        path: '/library/Slomannaya_Igrushka/01_Prolog.html',
                        anchor: '#0',
                        content: '',
                        link: '<div id="0"></div>',
                    },
                    {
                        id: 2,
                        name: 'Глава 1',
                        path: '/library/Slomannaya_Igrushka/02_Glava_01.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 3,
                        name: 'Глава 2',
                        path: '/library/Slomannaya_Igrushka/03_Glava_02.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 4,
                        name: 'Глава 3',
                        path: '/library/Slomannaya_Igrushka/04_Glava_03.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 5,
                        name: 'Глава 4',
                        path: '/library/Slomannaya_Igrushka/05_Glava_04.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    {
                        id: 6,
                        name: 'Глава 5',
                        path: '/library/Slomannaya_Igrushka/06_Glava_05.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 7,
                        name: 'Глава 6',
                        path: '/library/Slomannaya_Igrushka/07_Glava_06.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                    {
                        id: 8,
                        name: 'Глава 7',
                        path: '/library/Slomannaya_Igrushka/08_Glava_07.html',
                        anchor: '#VII',
                        content: '',
                        link: '<div id="VII"></div>',
                    },
                    {
                        id: 9,
                        name: 'Глава 8',
                        path: '/library/Slomannaya_Igrushka/09_Glava_08.html',
                        anchor: '#VIII',
                        content: '',
                        link: '<div id="VIII"></div>',
                    },
                    {
                        id: 10,
                        name: 'Глава 9',
                        path: '/library/Slomannaya_Igrushka/10_Glava_09.html',
                        anchor: '#IX',
                        content: '',
                        link: '<div id="IX"></div>',
                    },
                    {
                        id: 11,
                        name: 'Глава 10',
                        path: '/library/Slomannaya_Igrushka/11_Glava_10.html',
                        anchor: '#X',
                        content: '',
                        link: '<div id="X"></div>',
                    },
                    {
                        id: 12,
                        name: 'Глава 11',
                        path: '/library/Slomannaya_Igrushka/12_Glava_11.html',
                        anchor: '#XI',
                        content: '',
                        link: '<div id="XI"></div>',
                    },
                    {
                        id: 13,
                        name: 'Глава 12',
                        path: '/library/Slomannaya_Igrushka/13_Glava_12.html',
                        anchor: '#XII',
                        content: '',
                        link: '<div id="XII"></div>',
                    },
                    {
                        id: 14,
                        name: 'Глава 13',
                        path: '/library/Slomannaya_Igrushka/14_Glava_13.html',
                        anchor: '#XIII',
                        content: '',
                        link: '<div id="XIII"></div>',
                    },
                    {
                        id: 15,
                        name: 'Глава 14',
                        path: '/library/Slomannaya_Igrushka/15_Glava_14.html',
                        anchor: '#XIV',
                        content: '',
                        link: '<div id="XIV"></div>',
                    },
                    {
                        id: 16,
                        name: 'Глава 15',
                        path: '/library/Slomannaya_Igrushka/16_Glava_15.html',
                        anchor: '#XV',
                        content: '',
                        link: '<div id="XV"></div>',
                    },
                    {
                        id: 17,
                        name: 'Глава 16',
                        path: '/library/Slomannaya_Igrushka/17_Glava_16.html',
                        anchor: '#XVI',
                        content: '',
                        link: '<div id="XVI"></div>',
                    },
                    {
                        id: 18,
                        name: 'Глава 17',
                        path: '/library/Slomannaya_Igrushka/18_Glava_17.html',
                        anchor: '#XVII',
                        content: '',
                        link: '<div id="XVII"></div>',
                    },
                    {
                        id: 19,
                        name: 'Глава 18',
                        path: '/library/Slomannaya_Igrushka/19_Glava_18.html',
                        anchor: '#XVIII',
                        content: '',
                        link: '<div id="XVIII"></div>',
                    },
                    {
                        id: 20,
                        name: 'Глава 19',
                        path: '/library/Slomannaya_Igrushka/20_Glava_19.html',
                        anchor: '#XIX',
                        content: '',
                        link: '<div id="XIX"></div>',
                    },
                    {
                        id: 21,
                        name: 'Глава 20',
                        path: '/library/Slomannaya_Igrushka/21_Glava_20.html',
                        anchor: '#XX',
                        content: '',
                        link: '<div id="XX"></div>',
                    },
                    {
                        id: 22,
                        name: 'Глава 21',
                        path: '/library/Slomannaya_Igrushka/22_Glava_21.html',
                        anchor: '#XXI',
                        content: '',
                        link: '<div id="XXI"></div>',
                    },
                    {
                        id: 23,
                        name: 'Глава 22',
                        path: '/library/Slomannaya_Igrushka/23_Glava_22.html',
                        anchor: '#XXII',
                        content: '',
                        link: '<div id="XXII"></div>',
                    },
                    {
                        id: 24,
                        name: 'Глава 23',
                        path: '/library/Slomannaya_Igrushka/24_Glava_23.html',
                        anchor: '#XXIII',
                        content: '',
                        link: '<div id="XXIII"></div>',
                    },
                    {
                        id: 25,
                        name: 'Глава 24',
                        path: '/library/Slomannaya_Igrushka/25_Glava_24.html',
                        anchor: '#XXIV',
                        content: '',
                        link: '<div id="XXIV"></div>',
                    },
                    {
                        id: 26,
                        name: 'Глава 25',
                        path: '/library/Slomannaya_Igrushka/26_Glava_25.html',
                        anchor: '#XXV',
                        content: '',
                        link: '<div id="XXV"></div>',
                    },
                    {
                        id: 27,
                        name: 'Глава 26',
                        path: '/library/Slomannaya_Igrushka/27_Glava_26_i_epilog.html',
                        anchor: '#XXVI',
                        content: '',
                        link: '<div id="XXVI"></div>',
                    },
                    
                ]
                

          },
          {
                id: 3,
                name: 'Серые будни',
                pathName: 'Serye_Budni',
                wordCount: 41267,
                chaptersCount: 10,
                authorName: 'Tvio',
                authorLink: 'https://ponyfiction.org/accounts/12456/',
                genres: ['Зарисовка', 'Sci-fi', 'Повседневность', 'Романтика', 'Сломанная игрушка', 'AU', 'Мир Земли', ],
                sourceLink: 'https://ponyfiction.org/story/9707/',
                cover: 'background: linear-gradient(129deg, rgba(116,116,116,0.7) 56%, rgba(255,253,157,0.7) 100%);',
                path: '/library/Serye_budni/',
                characters: [
                    {
                        name: 'Derpy Hooves',
                        path:'/ponies/derpy.png'
                    },
                    {
                        name: 'Fleur de Lis',
                        path:'/ponies/fleur.png'
                    },
                    {
                        name:'Human(s)', 
                        path: '/ponies/human.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'Пролог',
                        path: '/library/Serye_budni/01_Prolog.html',
                        anchor: '#0',
                        content: '',
                        link: '<div id="0"></div>',
                    },
                    {
                        id: 2,
                        name: 'Глава 1',
                        path: '/library/Serye_budni/02_Glava_pervaya.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 3,
                        name: 'Глава 2',
                        path: '/library/Serye_budni/03_Glava_vtoraya.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 4,
                        name: 'Глава 3',
                        path: '/library/Serye_budni/04_Glava_tret_ya.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 5,
                        name: 'Глава 4',
                        path: '/library/Serye_budni/05_Glava_chetvertaya.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    {
                        id: 6,
                        name: 'Глава 5',
                        path: '/library/Serye_budni/06_Glava_pyataya.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 7,
                        name: 'Глава 6',
                        path: '/library/Serye_budni/07_Glava_shestaya.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                    {
                        id: 8,
                        name: 'Глава 7',
                        path: '/library/Serye_budni/08_Glava_sed_maya.html',
                        anchor: '#VII',
                        content: '',
                        link: '<div id="VII"></div>',
                    },
                    {
                        id: 9,
                        name: 'Глава 8',
                        path: '/library/Serye_budni/09_Glava_vos_maya.html',
                        anchor: '#VIII',
                        content: '',
                        link: '<div id="VIII"></div>',
                    },
                    {
                        id: 10,
                        name: 'Эпилог',
                        path: '/library/Serye_budni/10_Epilog.html',
                        anchor: '#IX',
                        content: '',
                        link: '<div id="IX"></div>',
                    },
                ]
              },
              {
                id: 4,
                name: 'Винил и Октавия: Университетские дни',
                pathName: 'Vinil_i_Oktaviya_Universitetskie_dni',
                wordCount: 57767,
                chaptersCount: 22,
                authorName: 'Polex',
                authorLink: 'https://tabun.everypony.ru/profile/Polex/',
                genres: ['Зарисовка', 'Повседневность', 'Романтика', 'Флафф', 'Юмор', 'Шиппинг', 'Школьные истории'],
                sourceLink: 'https://ponyfiction.org/story/9156/',
                cover: 'background: linear-gradient(123deg, rgba(108,108,108,0.7) 0%, rgba(79,92,255,0.7) 80%);',
                path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/',
                characters: [
                    {
                        name: 'Octavia Melody',
                        path:'/ponies/octavia.png'
                    },
                    {
                        name: 'Vinyl Scratch',
                        path:'/ponies/vinyl.png'
                    },
                    {
                        name: 'Lyra Heartstrings',
                        path:'/ponies/lyra.png'
                    },
                    {
                        name: 'Sweetie Drops',
                        path:'/ponies/bonbon.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'Глава 1',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/01_Glava_1.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'Глава 2',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/02_Glava_2.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 3,
                        name: 'Глава 3',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/03_Glava_3.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 4,
                        name: 'Глава 4',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/04_Glava_4.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    {
                        id: 5,
                        name: 'Глава 5',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/05_Glava_5.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 6,
                        name: 'Глава 6',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/06_Glava_6.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                    {
                        id: 7,
                        name: 'Глава 7',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/07_Glava_7.html',
                        anchor: '#VII',
                        content: '',
                        link: '<div id="VII"></div>',
                    },
                    {
                        id: 8,
                        name: 'Глава 8',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/08_Glava_8.html',
                        anchor: '#VIII',
                        content: '',
                        link: '<div id="VIII"></div>',
                    },
                    {
                        id: 9,
                        name: 'Глава 9',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/09_Glava_9.html',
                        anchor: '#IX',
                        content: '',
                        link: '<div id="IX"></div>',
                    },
                    {
                        id: 10,
                        name: 'Глава 10',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/10_Glava_10.html',
                        anchor: '#X',
                        content: '',
                        link: '<div id="X"></div>',
                    },
                    {
                        id: 11,
                        name: 'Глава 11',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/11_Glava_11.html',
                        anchor: '#XI',
                        content: '',
                        link: '<div id="XI"></div>',
                    },
                    {
                        id: 12,
                        name: 'Глава 12',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/12_Glava_12.html',
                        anchor: '#XII',
                        content: '',
                        link: '<div id="XII"></div>',
                    },
                    {
                        id: 13,
                        name: 'Глава 13',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/13_Glava_13.html',
                        anchor: '#XIII',
                        content: '',
                        link: '<div id="XIII"></div>',
                    },
                    {
                        id: 14,
                        name: 'Глава 14',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/14_Glava_14.html',
                        anchor: '#XIV',
                        content: '',
                        link: '<div id="XIV"></div>',
                    },
                    {
                        id: 15,
                        name: 'Глава 15',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/15_Glava_15.html',
                        anchor: '#XV',
                        content: '',
                        link: '<div id="XV"></div>',
                    },
                    {
                        id: 16,
                        name: 'Глава 16',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/16_Glava_16.html',
                        anchor: '#XVI',
                        content: '',
                        link: '<div id="XVI"></div>',
                    },
                    {
                        id: 17,
                        name: 'Глава 17',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/17_Glava_17.html',
                        anchor: '#XVII',
                        content: '',
                        link: '<div id="XVII"></div>',
                    },
                    {
                        id: 18,
                        name: 'Глава 18',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/18_Glava_18.html',
                        anchor: '#XVIII',
                        content: '',
                        link: '<div id="XVIII"></div>',
                    },
                    {
                        id: 19,
                        name: 'Глава 19',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/19_Glava_19.html',
                        anchor: '#XIX',
                        content: '',
                        link: '<div id="XIX"></div>',
                    },
                    {
                        id: 20,
                        name: 'Глава 20',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/20_Glava_20.html',
                        anchor: '#XX',
                        content: '',
                        link: '<div id="XX"></div>',
                    },
                    {
                        id: 21,
                        name: 'Глава 21',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/21_Glava_21.html',
                        anchor: '#XXI',
                        content: '',
                        link: '<div id="XXI"></div>',
                    },
                    {
                        id: 22,
                        name: 'Эпилог',
                        path: '/library/Vinil_i_Oktaviya_Universitetskie_dni/22_Epilog.html',
                        anchor: '#XXII',
                        content: '',
                        link: '<div id="XXII"></div>',
                    },
                ]
              },
              {
                id: 5,
                name: 'Дружба на все времена',
                pathName: 'Druzhba_na_vse_vremena',
                wordCount: 30437,
                chaptersCount: 8,
                authorName: 'DarkKnight',
                authorLink: 'https://tabun.everypony.ru/profile/DarkKnight/',
                genres: ['Драма', 'Приключения','Романтика', 'Экшн', 'Юмор', 'ОС - пони', 'Драконы', 'Прошлое', 'Путешествия во времени', 'Шиппинг'],
                sourceLink: 'https://ponyfiction.org/story/2785/',
                cover: 'background: linear-gradient(200deg, rgba(255,45,231,0.7) 0%, rgba(112,0,213,0.7) 81%);',
                path: '/library/Druzhba_na_vse_vremena/',
                characters: [
                    {
                        name:'Twilight Sparkle', 
                        path: '/ponies/twilight.png'
                    },
                    {
                        name: 'Princess Celestia',
                        path:'/ponies/celestia.png'
                    },
                    {
                        name:'Lyra Heartstrings', 
                        path: '/ponies/lyra.png'
                    },
                    {
                        name: 'Doctor Whooves',
                        path:'/ponies/doctor.png'
                    },
                    {
                        name: 'Derpy Hooves',
                        path:'/ponies/derpy.png'
                    },
                    {
                        name: 'OC',
                        path:'/ponies/oc.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'Пролог и глава 1',
                        path: '/library/Druzhba_na_vse_vremena/1_Prolog_i_Glava_1.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'Глава 2',
                        path: '/library/Druzhba_na_vse_vremena/2_Glava_2.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 3,
                        name: 'Глава 3',
                        path: '/library/Druzhba_na_vse_vremena/3_Glava_3.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 4,
                        name: 'Глава 4',
                        path: '/library/Druzhba_na_vse_vremena/4_Glava_4.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    {
                        id: 5,
                        name: 'Глава 5',
                        path: '/library/Druzhba_na_vse_vremena/5_Glava_5.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 6,
                        name: 'Глава 6',
                        path: '/library/Druzhba_na_vse_vremena/6_Glava_6.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                    {
                        id: 7,
                        name: 'Глава 7',
                        path: '/library/Druzhba_na_vse_vremena/7_Glava_7.html',
                        anchor: '#VII',
                        content: '',
                        link: '<div id="VII"></div>',
                    },
                    {
                        id: 8,
                        name: 'Глава 8 и эпилог',
                        path: '/library/Druzhba_na_vse_vremena/8_Glava_8_i_epilog_.html',
                        anchor: '#VIII',
                        content: '',
                        link: '<div id="VIII"></div>',
                    },
                ]
              },
              {
                id: 6,
                name: 'Антропология',
                pathName: 'Antropologiya',
                wordCount: 113529,
                chaptersCount: 31,
                authorName: 'Allottho',
                authorLink: 'https://tabun.everypony.ru/profile/Allottho/',
                path: '/library/Antropologiya/',
                genres: ['Зарисовка', 'Приключения','Повседневность', 'Флафф', 'Юмор', 'Мир Земли', 'Параллельный мир'],
                sourceLink: 'https://ponyfiction.org/story/143/',
                cover: 'background: linear-gradient(200deg, rgba(255,45,231,0.7) 0%, rgba(0,213,180,0.7) 80%);',
                characters: [
                    {
                        name:'Lyra Heartstrings', 
                        path: '/ponies/lyra.png'
                    },
                    {
                        name:'Sweetie Drops', 
                        path: '/ponies/bonbon.png'
                    },
                    {
                        name:'Twilight Sparkle', 
                        path: '/ponies/twilight.png'
                    },
                    {
                        name:'Human(s)', 
                        path: '/ponies/human.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I - Музыка и магия',
                        path: '/library/Antropologiya/01_I_Muzyka_i_Magiya.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'II - Эквестрийская история',
                        path: '/library/Antropologiya/02_II_Ekvestriyskaya_istoriya.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 3,
                        name: 'III - Экcперимент',
                        path: '/library/Antropologiya/03_III_Eksperiment.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 4,
                        name: 'IV - Принцесса ночи',
                        path: '/library/Antropologiya/04_IV_Printsessa_Nochi.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    {
                        id: 5,
                        name: 'V - Одеваясь со стилем',
                        path: '/library/Antropologiya/05_V_Odevayas_so_stilem.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 6,
                        name: 'VI - Рождество',
                        path: '/library/Antropologiya/06_VI_Rozhdestvo.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                    {
                        id: 7,
                        name: 'VII - Исследования и соперничество',
                        path: '/library/Antropologiya/07_VII_Issledovaniya_i_sopernichestvo.html',
                        anchor: '#VII',
                        content: '',
                        link: '<div id="VII"></div>',
                    },
                    {
                        id: 8,
                        name: 'VIII - Материальный ущерб',
                        path: '/library/Antropologiya/08_VIII_Material_nyy_ushcherb.html',
                        anchor: '#VIII',
                        content: '',
                        link: '<div id="VIII"></div>',
                    },
                    {
                        id: 9,
                        name: 'IX - Кантерлотский заговор',
                        path: '/library/Antropologiya/09_IX_Kanterlotskiy_zagovor.html',
                        anchor: '#IX',
                        content: '',
                        link: '<div id="IX"></div>',
                    },
                    {
                        id: 10,
                        name: 'X - Лира',
                        path: '/library/Antropologiya/10_X_Lira.html',
                        anchor: '#X',
                        content: '',
                        link: '<div id="X"></div>',
                    },
                    {
                        id: 11,
                        name: 'XI - На дороге',
                        path: '/library/Antropologiya/11_XI_Na_doroge.html',
                        anchor: '#XI',
                        content: '',
                        link: '<div id="XI"></div>',
                    },
                    {
                        id: 12,
                        name: 'XII - Культурный шок',
                        path: '/library/Antropologiya/12_XII_Kul_turnyy_shok.html',
                        anchor: '#XII',
                        content: '',
                        link: '<div id="XII"></div>',
                    },
                    {
                        id: 13,
                        name: 'XIII - Возможны осадки',
                        path: '/library/Antropologiya/13_XIII_Vozmozhny_osadki.html',
                        anchor: '#XIII',
                        content: '',
                        link: '<div id="XIII"></div>',
                    },
                    {
                        id: 14,
                        name: 'XIV - Следуй этому пути',
                        path: '/library/Antropologiya/14_XIV_Sleduy_etomu_puti.html',
                        anchor: '#XIV',
                        content: '',
                        link: '<div id="XIV"></div>',
                    },
                    {
                        id: 15,
                        name: 'XV - Еще многому предстоит научиться',
                        path: '/library/Antropologiya/15_XV_Eshchyo_mnogomu_predstoit_nauchit_sya.html',
                        anchor: '#XV',
                        content: '',
                        link: '<div id="XV"></div>',
                    },
                    {
                        id: 16,
                        name: 'XVI - Новое испытание',
                        path: '/library/Antropologiya/16_XVI_Novoe_ispytanie.html',
                        anchor: '#XVI',
                        content: '',
                        link: '<div id="XVI"></div>',
                    },
                    {
                        id: 17,
                        name: 'XVII - Самая лучшая ночь',
                        path: '/library/Antropologiya/17_XVII_Samaya_luchshaya_noch_.html',
                        anchor: '#XVII',
                        content: '',
                        link: '<div id="XVII"></div>',
                    },
                    {
                        id: 18,
                        name: 'XVIII - Прошлые жизни',
                        path: '/library/Antropologiya/18_XVIII_Proshlye_zhizni.html',
                        anchor: '#XVIII',
                        content: '',
                        link: '<div id="XVIII"></div>',
                    },
                    {
                        id: 19,
                        name: 'XIX - В небо',
                        path: '/library/Antropologiya/19_XIX_V_nebo.html',
                        anchor: '#XIX',
                        content: '',
                        link: '<div id="XIX"></div>',
                    },
                    {
                        id: 20,
                        name: 'XX - Снова дома',
                        path: '/library/Antropologiya/20_XX_Snova_doma.html',
                        anchor: '#XX',
                        content: '',
                        link: '<div id="XX"></div>',
                    },
                    {
                        id: 21,
                        name: 'XXI - Жизнь во лжи',
                        path: '/library/Antropologiya/21_XXI_Zhizn_vo_lzhi.html',
                        anchor: '#XXI',
                        content: '',
                        link: '<div id="XXI"></div>',
                    },
                    {
                        id: 22,
                        name: 'XXII - Долгая разлука',
                        path: '/library/Antropologiya/22_XXII_Dolgaya_razluka.html',
                        anchor: '#XXII',
                        content: '',
                        link: '<div id="XXII"></div>',
                    },
                    {
                        id: 23,
                        name: 'XXIII - Еще на один год старше',
                        path: '/library/Antropologiya/23_XXIII_Eshchyo_na_odin_god_starshe.html',
                        anchor: '#XXIII',
                        content: '',
                        link: '<div id="XXIII"></div>',
                    },
                    {
                        id: 24,
                        name: 'XXIV - Начало концв',
                        path: '/library/Antropologiya/24_XXIV_Nachalo_kontsa.html',
                        anchor: '#XXIV',
                        content: '',
                        link: '<div id="XXIV"></div>',
                    },
                    {
                        id: 25,
                        name: 'XXV - Истина откроется',
                        path: '/library/Antropologiya/25_XXV_Istina_otkroetsya.html',
                        anchor: '#XXV',
                        content: '',
                        link: '<div id="XXV"></div>',
                    },
                    {
                        id: 26,
                        name: 'XXVI - Знакомые лица',
                        path: '/library/Antropologiya/26_XXVI_Znakomye_litsa.html',
                        anchor: '#XXVI',
                        content: '',
                        link: '<div id="XXVI"></div>',
                    },
                    {
                        id: 27,
                        name: 'XXVII - Хаос',
                        path: '/library/Antropologiya/27_XXVII_Khaos.html',
                        anchor: '#XXVII',
                        content: '',
                        link: '<div id="XXVII"></div>',
                    },
                    {
                        id: 28,
                        name: 'XXVIII - Дружба',
                        path: '/library/Antropologiya/28_XXVIII_Druzhba.html',
                        anchor: '#XXVIII',
                        content: '',
                        link: '<div id="XXVIII"></div>',
                    },
                    {
                        id: 29,
                        name: 'XXIX - Меж двух миров',
                        path: '/library/Antropologiya/29_XXIX_Mezh_dvukh_mirov.html',
                        anchor: '#XXIX',
                        content: '',
                        link: '<div id="XXIX"></div>',
                    },
                    {
                        id: 30,
                        name: 'XXX - Гармония',
                        path: '/library/Antropologiya/30_XXX_Garmoniya.html',
                        anchor: '#XXX',
                        content: '',
                        link: '<div id="XXX"></div>',
                    },
                    {
                        id: 31,
                        name: 'XXVIII - Месяц спустя',
                        path: '/library/Antropologiya/31_XXXI_Mesyats_spustya.html',
                        anchor: '#XXVIII',
                        content: '',
                        link: '<div id="XXVIII"></div>',
                    },
                  ]
              },
              {
                id: 7,
                name: 'Лунная тень',
                pathName: 'Lunnaya_ten_',
                wordCount: 30754,
                chaptersCount: 12,
                authorName: 'Krynnit',
                authorLink: 'https://tabun.everypony.ru/profile/Krynnit/',
                genres: ['Приключения','Повседневность', 'Романтика', 'ОС - пони', ],
                sourceLink: 'https://ponyfiction.org/story/23/',
                cover: 'background: linear-gradient(200deg, rgba(25,2,112,0.7) 0%, rgba(145,132,251,0.7) 80%);',
                path: '/library/Lunnaya_ten_/',
                characters: [
                    {
                        name: 'Princess Celestia',
                        path:'/ponies/celestia.png'
                    },
                    {
                        name: 'Trixie Lulamoon',
                        path:'/ponies/trixie.png' 
                    },
                    {
                        name: 'Derpy Hooves',
                        path:'/ponies/derpy.png'
                    },
                    {
                        name: 'Other ponies',
                        path:'/ponies/other.png'
                    },
                    {
                        name: 'OC',
                        path:'/ponies/oc.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'Пролог',
                        path: '/library/Lunnaya_ten_/01_Prolog.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'Глава 1',
                        path: '/library/Lunnaya_ten_/02_Glava_1.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 3,
                        name: 'Глава 2',
                        path: '/library/Lunnaya_ten_/03_Glava_2.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 4,
                        name: 'Глава 3',
                        path: '/library/Lunnaya_ten_/04_Glava_3.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    {
                        id: 5,
                        name: 'Глава 4',
                        path: '/library/Lunnaya_ten_/05_Glava_4.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 6,
                        name: 'Глава 5',
                        path: '/library/Lunnaya_ten_/06_Glava_5.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                    {
                        id: 7,
                        name: 'Глава 6',
                        path: '/library/Lunnaya_ten_/07_Glava_6.html',
                        anchor: '#VII',
                        content: '',
                        link: '<div id="VII"></div>',
                    },
                    {
                        id: 8,
                        name: 'Глава 7',
                        path: '/library/Lunnaya_ten_/08_Glava_7.html',
                        anchor: '#VIII',
                        content: '',
                        link: '<div id="VIII"></div>',
                    },
                    {
                        id: 9,
                        name: 'Глава 8',
                        path: '/library/Lunnaya_ten_/09_Glava_8.html',
                        anchor: '#IX',
                        content: '',
                        link: '<div id="IX"></div>',
                    },
                    {
                        id: 10,
                        name: 'Глава 9',
                        path: '/library/Lunnaya_ten_/10_Glava_9.html',
                        anchor: '#X',
                        content: '',
                        link: '<div id="X"></div>',
                    },
                    {
                        id: 11,
                        name: 'Глава 10',
                        path: '/library/Lunnaya_ten_/11_Glava_10.html',
                        anchor: '#XI',
                        content: '',
                        link: '<div id="XI"></div>',
                    },
                    {
                        id: 12,
                        name: 'Эпилог',
                        path: '/library/Lunnaya_ten_/12_Epilog.html',
                        anchor: '#XII',
                        content: '',
                        link: '<div id="XII"></div>',
                    }, 
                ]
              },
              {
                id: 8,
                name: 'Сказки небесного домика',
                pathName: 'Skazki_nebesnogo_domika',
                wordCount: 104465,
                chaptersCount: 13,
                authorName: 'Romuald',
                authorLink: 'https://ponyfiction.org/accounts/758/',
                genres: ['Зарисовка', 'Приключения','Повседневность', 'Романтика', 'ОС - пони'],
                sourceLink: 'https://ponyfiction.org/story/701/',
                cover: 'background: linear-gradient(140deg, rgba(91,250,255,0.7) 15%, rgba(255,253,168,0.7) 52%, rgba(255,126,142,0.7) 100%);',
                path: '/library/Skazki_nebesnogo_domika/',
                characters: [
                    {
                        name: 'Rainbow Dash',
                        path: '/ponies/rainbow_dash.png'
                    },
                    {
                        name: 'OC',
                        path:'/ponies/oc.png'
                    }
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I - Грозовой пегас',
                        path: '/library/Skazki_nebesnogo_domika/01_Grozovoy_pegas.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'II - Крылья для Скуталу',
                        path: '/library/Skazki_nebesnogo_domika/02_Kryl_ya_dlya_Skutalu.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 3,
                        name: 'III - Пегасий массаж',
                        path: '/library/Skazki_nebesnogo_domika/03_Pegasiy_massazh.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 4,
                        name: 'IV - Воздушные яблоки',
                        path: '/library/Skazki_nebesnogo_domika/04_Vozdushnye_yabloki.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    }, 
                    {
                        id: 5,
                        name: 'V - Радуга среди ясного неба',
                        path: '/library/Skazki_nebesnogo_domika/05_Raduga_sredi_yasnogo_neba.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 6,
                        name: 'VI - Повелительница стужи',
                        path: '/library/Skazki_nebesnogo_domika/06_Povelitel_nitsa_stuzhi.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                    {
                        id: 7,
                        name: 'VII - Небесный парад',
                        path: '/library/Skazki_nebesnogo_domika/07_Nebesnyy_parad.html',
                        anchor: '#VII',
                        content: '',
                        link: '<div id="VII"></div>',
                    },
                    {
                        id: 8,
                        name: 'VIII - Звёздный ловчий',
                        path: '/library/Skazki_nebesnogo_domika/08_Zvyozdnyy_lovchiy.html',
                        anchor: '#VIII',
                        content: '',
                        link: '<div id="VIII"></div>',
                    },
                    {
                        id: 9,
                        name: 'IX - День мыльных пузырей',
                        path: '/library/Skazki_nebesnogo_domika/09_Den_myl_nykh_puzyrey.html',
                        anchor: '#IX',
                        content: '',
                        link: '<div id="IX"></div>',
                    },
                    {
                        id: 10,
                        name: 'X - Мои маленькие, маленькие пони',
                        path: '/library/Skazki_nebesnogo_domika/10_Moi_malen_kie_malen_kie_poni.html',
                        anchor: '#X',
                        content: '',
                        link: '<div id="X"></div>',
                    },
                    {
                        id: 11,
                        name: 'XI - Отраженная радуга',
                        path: '/library/Skazki_nebesnogo_domika/11_Otrazhyonnaya_raduga.html',
                        anchor: '#XI',
                        content: '',
                        link: '<div id="XI"></div>',
                    },
                    {
                        id: 12,
                        name: 'XII - Барельеф',
                        path: '/library/Skazki_nebesnogo_domika/12_Burel_ef.html',
                        anchor: '#XII',
                        content: '',
                        link: '<div id="XII"></div>',
                    },
                    {
                        id: 13,
                        name: 'XIII - Голубой цвет и белый',
                        path: '/library/Skazki_nebesnogo_domika/13_Goluboy_tsvet_i_belyy.html',
                        anchor: '#XIII',
                        content: '',
                        link: '<div id="XIII"></div>',
                    },
                ]
              },
              {
                id: 9,
                name: 'Солнце в рюкзаке',
                pathName: 'Solntse_v_rykzake',
                wordCount: 51291,
                chaptersCount: 8,
                authorName: 'Romuald',
                authorLink: 'https://ponyfiction.org/accounts/758/',
                genres: ['Sci-fi', 'Приключения','Драма', 'Романтика', 'Экшн', 'Сломанная игрушка', 'AU', 'Мир Земли', 'Будущее', 'Шиппинг'],
                sourceLink: 'https://ponyfiction.org/story/12534/',
                cover: 'background: linear-gradient(162deg, rgba(255,0,166,0.7) 0%, rgba(253,187,45,0.7) 100%);',
                path: '/library/Solntse_v_rykzake/',
                characters: [
                    {
                        name: 'Rainbow Dash',
                        path: '/ponies/rainbow_dash.png'
                    },
                    {
                        name:'Human(s)', 
                        path: '/ponies/human.png'
                    },
                    {
                        name: 'Sunset Shimmer',
                        path:'/ponies/sunset.png'
                    },
                    {
                        name: 'Diamond Tiara',
                        path:'/ponies/tiara.png'
                    }
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I - Новая жизнь',
                        path: '/library/Solntse_v_rykzake/1_Glava_01_Novaya_zhizn_.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'II - Свежее мясо',
                        path: '/library/Solntse_v_rykzake/2_Glava_02_Svezhee_myaso.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 3,
                        name: 'III - Бунт против небесных чертогов',
                        path: '/library/Solntse_v_rykzake/3_Glava_03_Bunt_protiv_nebesnykh_chertogov.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 4,
                        name: 'IV - На небесной тропе',
                        path: '/library/Solntse_v_rykzake/4_Glava_04_Na_nebesnoy_trope.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    {
                        id: 5,
                        name: 'V - Самоубийственная миссия',
                        path: '/library/Solntse_v_rykzake/5_Glava_05_Samoubiystvennaya_missiya.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 6,
                        name: 'VI - Непредвиденные последствия',
                        path: '/library/Solntse_v_rykzake/6_Glava_06_Nepredvidennye_posledstviya.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                    {
                        id: 7,
                        name: 'VII - Там, где светит солнце',
                        path: '/library/Solntse_v_rykzake/7_Glava_07_Tam_gde_svetit_solntse.html',
                        anchor: '#VII',
                        content: '',
                        link: '<div id="VII"></div>',
                    },
                    {
                        id: 8,
                        name: 'VIII - Эпилог',
                        path: '/library/Solntse_v_rykzake/8_Epilog.html',
                        anchor: '#VIII',
                        content: '',
                        link: '<div id="VIII"></div>',
                    }, 
                ]
              },
              {
                id: 10,
                name: 'Спящий рай',
                pathName: 'Spyashchiy_ray',
                wordCount: 8293,
                chaptersCount: 2,
                authorName: 'MadHotaru',
                authorLink: 'https://tabun.everypony.ru/profile/MadHotaru/',
                genres: ['Sci-fi', 'Приключения','Драма', 'OC - пони', 'Постапокалипсис', 'Ангст'],
                sourceLink: 'https://ponyfiction.org/story/71/',
                cover: 'background: linear-gradient(162deg, rgba(41,41,41,0.7) 0%, rgba(137,45,253,0.7) 100%);',
                path: '/library/Spyashchiy_ray/',
                characters: [
                    {
                        name: 'OC',
                        path:'/ponies/oc.png'
                    }
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I - Первая',
                        path: '/library/Spyashchiy_ray/1_Pervaya_.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'II - Последняя',
                        path: '/library/Spyashchiy_ray/2_Poslednyaya_.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                ]
              },
              {
                id: 11,
                name: 'К лучшей жизни с наукой и пони',
                pathName: 'K_luchshey_zhizni_s_naukoy_i_poni',
                wordCount:  27265,
                chaptersCount: 10,
                authorName: 'Многорукий Удав',
                authorLink: 'https://ponyfiction.org/accounts/4/',
                genres: ['Sci-fi', 'Приключения','Кроссовер', 'OC - пони', 'Экшн'],
                sourceLink: 'https://ponyfiction.org/story/15/',
                cover: 'background: linear-gradient(162deg, rgba(1,120,104,0.7) 0%, rgba(162,162,162,0.7) 100%);',
                path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/',
                characters: [
                    {
                        name: 'Rainbow Dash',
                        path: '/ponies/rainbow_dash.png'
                    },
                    {
                        name: 'Fluttershy',
                        path: '/ponies/fluttershy.png'
                    },
                    {
                        name:'Twilight Sparkle', 
                        path: '/ponies/twilight.png'
                    },
                    {
                        name: 'Rarity',
                        path:'/ponies/rarity.png'
                    },
                    {
                        name: 'Pinkie Pie',
                        path:'/ponies/pinkie_pie.png'
                    },
                    {
                        name: 'Applejack',
                        path:'/ponies/applejack.png'
                    },
                    {
                        name: 'Princess Celestia',
                        path:'/ponies/celestia.png'
                    },
                    {
                        name: 'Derpy Hooves',
                        path:'/ponies/derpy.png'
                    },
                    {
                        name: 'Other ponies',
                        path:'/ponies/other.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I - Уитли, ты дурак',
                        path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/01_Uitli_ty_durak_.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'II - Вкус свободы',
                        path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/02_Vkus_svobody.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 3,
                        name: 'III - Центр развития',
                        path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/03_Tsentr_Razvitiya.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 4,
                        name: 'IV - Тесты начинаются',
                        path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/04_Testy_nachinaytsya.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    {
                        id: 5,
                        name: 'V - Вкус свободы',
                        path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/05_Selestiya_protiv_GLaDOS_raund_vtoroy.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 6,
                        name: 'VI - Тестовая камера',
                        path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/06_Testovaya_kamera_101.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                    {
                        id: 7,
                        name: 'VII - Не по правилам',
                        path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/07_Ne_po_pravilam.html',
                        anchor: '#VII',
                        content: '',
                        link: '<div id="VII"></div>',
                    },
                    {
                        id: 8,
                        name: 'VIII - Уроки из прошлого',
                        path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/08_Uroki_iz_proshlogo.html',
                        anchor: '#VIII',
                        content: '',
                        link: '<div id="VIII"></div>',
                    },
                    {
                        id: 9,
                        name: 'IX - Не так просто',
                        path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/09_Ne_tak_prosto.html',
                        anchor: '#IX',
                        content: '',
                        link: '<div id="IX"></div>',
                    },
                    {
                        id: 10,
                        name: 'X - Последствия',
                        path: '/library/K_luchshey_zhizni_s_naukoy_i_poni/10_Posledstviya.html',
                        anchor: '#X',
                        content: '',
                        link: '<div id="X"></div>',
                    },
                ]
              },
              {
                id: 12,
                name: 'Дотянуться до солнца',
                pathName: 'Dotyanut_sya_do_solntsa',
                wordCount: 4360,
                chaptersCount: 1,
                authorName: 'Xilihard',
                authorLink: 'https://ponyfiction.org/accounts/7441/',
                genres: ['Драма', 'Зарисовка','Детство'],
                sourceLink: 'https://ponyfiction.org/story/11327/',
                cover: 'background: linear-gradient(162deg, rgba(1,0,61,0.7) 0%, rgba(255,211,251,0.7) 100%);',
                path: '/library/Dotyanut_sya_do_solntsa/',
                characters: [
                    {
                        name: 'Princess Celestia',
                        path:'/ponies/celestia.png'
                    },
                    {
                        name: 'Princess Luna',
                        path:'/ponies/luna.png'
                    },

                ],
                chapters: [
                    {
                        id: 1,
                        name: 'Воскресное утро',
                        path: '/library/Dotyanut_sya_do_solntsa/1_Voskresnoe_utro.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    
                ]
              },
              {
                id: 13,
                name: 'Игры с Хаосом',
                pathName: 'Igry_s_Khaosom',
                wordCount:  25802,
                chaptersCount: 4,
                authorName: 'Shadowmere',
                authorLink: 'https://ponyfiction.org/accounts/24/',
                genres: ['Кроссовер', 'Приключения','Параллельный мир', 'Потеря памяти'],
                sourceLink: 'https://ponyfiction.org/story/3308/',
                cover: 'background: linear-gradient(165deg, rgba(41,41,41,0.7) 27%, rgba(186,161,53,0.7) 66%, rgba(177,0,0,0.7) 100%);',
                path: '/library/Igry_s_Khaosom/',
                characters: [
                    {
                        name: 'Rainbow Dash',
                        path: '/ponies/rainbow_dash.png'
                    },
                    {
                        name: 'Fluttershy',
                        path: '/ponies/fluttershy.png'
                    },
                    {
                        name:'Twilight Sparkle', 
                        path: '/ponies/twilight.png'
                    },
                    {
                        name: 'Rarity',
                        path:'/ponies/rarity.png'
                    },
                    {
                        name: 'Pinkie Pie',
                        path:'/ponies/pinkie_pie.png'
                    },
                    {
                        name: 'Applejack',
                        path:'/ponies/applejack.png'
                    },
                    {
                        name: 'Princess Celestia',
                        path:'/ponies/celestia.png'
                    },
                    {
                        name: 'Princess Luna',
                        path:'/ponies/luna.png'
                    },
                    {
                        name: 'Discord',
                        path:'/ponies/discord.png'
                    },
                    {
                        name: 'Other ponies',
                        path:'/ponies/other.png'
                    }
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I',
                        path: '/library/Igry_s_Khaosom/1_I.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'II',
                        path: '/library/Igry_s_Khaosom/2_II.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 3,
                        name: 'III',
                        path: '/library/Igry_s_Khaosom/3_III.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 4,
                        name: 'IV',
                        path: '/library/Igry_s_Khaosom/4_IV.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    
                ]
              },
              {
                id: 14,
                name: 'Хранители Дискорда',
                pathName: 'Khraniteli_Diskorda',
                wordCount:  8568,
                chaptersCount: 3,
                authorName: 'Akvinikym',
                authorLink: 'https://ponyfiction.org/accounts/1408/',
                genres: ['Драма', 'Повседневность','AU', 'OC - пони', 'Смерть персонажей', 'Раскаявшиеся злодеи'],
                sourceLink: 'https://ponyfiction.org/story/2123/',
                cover: 'background: linear-gradient(165deg, rgba(41,41,41,0.7) 27%, rgba(96,53,186,0.7) 66%, rgba(255,224,228,0.7) 100%);',
                path: '/library/Khraniteli_Diskorda/',
                characters: [
                    {
                        name: 'Princess Celestia',
                        path:'/ponies/celestia.png'
                    },
                    {
                        name: 'Discord',
                        path:'/ponies/discord.png'
                    },
                    {
                        name: 'OC',
                        path:'/ponies/oc.png'
                    }
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I',
                        path: '/library/Khraniteli_Diskorda/1_Diskord.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 2,
                        name: 'II',
                        path: '/library/Khraniteli_Diskorda/2_Selestiya.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 3,
                        name: 'III',
                        path: '/library/Khraniteli_Diskorda/3_Epilog.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                ]
              },
              {
                id: 15,
                name: 'Один вечер из жизни Флаттершай и одна минута из жизни Дискорда',
                pathName: 'Odin_vecher_iz_zhizni_Flattershay_i_odna_minuta_iz_zhizni_Diskorda',
                wordCount:  8825,
                chaptersCount: 1,
                authorName: 'chelovekbeznika',
                authorLink: 'https://ponyfiction.org/accounts/19185/',
                genres: [ 'Повседневность', 'Приключения'],
                sourceLink: 'https://ponyfiction.org/story/13840/',
                cover: 'background: linear-gradient(330deg, rgba(93,93,93,0.7) 12%, rgba(255,253,168,0.7) 66%, rgba(254,170,180,0.7) 90%);',
                path: '/library/Odin_vecher_iz_zhizni_Flattershay_i_odna_minuta_iz_zhizni_Diskorda/',
                characters: [
                    {
                        name: 'Fluttershy',
                        path: '/ponies/fluttershy.png'
                    },
                    {
                        name: 'Discord',
                        path:'/ponies/discord.png'
                    },
                    {
                        name: 'OC',
                        path:'/ponies/oc.png'
                    }
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I',
                        path: '/library/Odin_vecher_iz_zhizni_Flattershay_i_odna_minuta_iz_zhizni_Diskorda/1_Odin_vecher_iz_zhizni_Flattershay_i_odna_minuta_iz_zhizni_Diskorda.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                ]
              },
              {
                id: 16,
                name: 'Самая длинная ночь',
                pathName: 'Samaya_dlinnaya_noch_',
                wordCount:  4769,
                chaptersCount: 1,
                authorName: 'Silent_Brat',
                authorLink: 'https://tabun.everypony.ru/profile/Silent_Brat/',
                genres: [ 'Драма', 'Зарисовка', 'Прошлое', 'Путешествия во времени', 'Старая Эквестрия'],
                sourceLink: 'https://ponyfiction.org/story/2809/',
                cover: 'background: linear-gradient(330deg, rgba(21,0,84,0.7) 5%, rgba(207,65,251,0.7) 45%, rgba(255,241,243,0.7) 96%);',
                path: '/library/Samaya_dlinnaya_noch_/',
                characters: [
                    {
                        name:'Twilight Sparkle', 
                        path: '/ponies/twilight.png'
                    },
                    {
                        name: 'Princess Celestia',
                        path:'/ponies/celestia.png'
                    },
                    {
                        name: 'Princess Luna',
                        path:'/ponies/luna.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I',
                        path: '/library/Samaya_dlinnaya_noch_/1_Samaya_dolgaya_noch_.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                ]
              },
              {
                id: 17,
                name: 'Дружба — Это Оптимум: Всегда Говори Нет',
                pathName: 'Druzhba_Eto_Optimum_Vsegda_Govori_Net',
                wordCount:  31578,
                chaptersCount: 7,
                sourceLink: 'https://ponyfiction.org/story/5642/',
                authorName: ' Akvinikym',
                authorLink: 'https://ponyfiction.org/accounts/1408/',
                genres: [ 'Sci-fi', 'Приключения', 'Экшн', 'Optimalverse', 'Виртуальная Эквестрия', 'Люди в Эквестрии', 'Будущее', 'Война', 'Смерть персонажей'],
                cover: 'background: linear-gradient(330deg, rgba(21,0,84,0.7) 5%, rgba(65,251,201,0.7) 45%, rgba(255,241,243,0.7) 96%);',
                path: '/library/Druzhba_Eto_Optimum_Vsegda_Govori_Net/',
                characters: [
                    {
                        name: 'Princess Celestia',
                        path:'/ponies/celestia.png'
                    },
                    {
                        name: 'Princess Luna',
                        path:'/ponies/luna.png'
                    },
                    {
                        name: 'Human(s)',
                        path:'/ponies/human.png'
                    }
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'Пролог - от двери к двери',
                        path: '/library/Druzhba_Eto_Optimum_Vsegda_Govori_Net/1_Prolog_Ot_Dveri_k_Dveri.html',
                        anchor: '#0',
                        content: '',
                        link: '<div id="0"></div>',
                    },
                    {
                        id: 2,
                        name: 'I - Обреченный',
                        path: '/library/Druzhba_Eto_Optimum_Vsegda_Govori_Net/2_Glava_1_Obrechyonnyy.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                    {
                        id: 3,
                        name: 'II - Течь на корабле',
                        path: '/library/Druzhba_Eto_Optimum_Vsegda_Govori_Net/3_Glava_2_Tech_na_Korable.html',
                        anchor: '#II',
                        content: '',
                        link: '<div id="II"></div>',
                    },
                    {
                        id: 4,
                        name: 'III - Торговец пеплом',
                        path: '/library/Druzhba_Eto_Optimum_Vsegda_Govori_Net/4_Glava_3_Torgovets_Peplom.html',
                        anchor: '#III',
                        content: '',
                        link: '<div id="III"></div>',
                    },
                    {
                        id: 5,
                        name: 'IV - Огонь по своим',
                        path: '/library/Druzhba_Eto_Optimum_Vsegda_Govori_Net/5_Glava_4_Ogon_po_Svoim.html',
                        anchor: '#IV',
                        content: '',
                        link: '<div id="IV"></div>',
                    },
                    {
                        id: 6,
                        name: 'V - Вверх по лестнице',
                        path: '/library/Druzhba_Eto_Optimum_Vsegda_Govori_Net/6_Glava_5_Vverkh_po_Lestnitse.html',
                        anchor: '#V',
                        content: '',
                        link: '<div id="V"></div>',
                    },
                    {
                        id: 7,
                        name: 'VI - Наличные за автохлам',
                        path: '/library/Druzhba_Eto_Optimum_Vsegda_Govori_Net/7_Glava_6_Nalichnye_za_avtokhlam.html',
                        anchor: '#VI',
                        content: '',
                        link: '<div id="VI"></div>',
                    },
                ]
              },
              {
                id: 18,
                name: 'Ты - лучшая',
                pathName: 'Ty_luchshaya',
                wordCount:  21136,
                chaptersCount: 1,
                authorName: 'Escapist',
                authorLink: 'https://tabun.everypony.ru/profile/Escapist/',
                genres: [ 'Повседневность', 'Зарисовка', 'Приключения', 'Юмор', 'RPS (Реальные персонажи)', 'Детство'],
                sourceLink: 'https://ponyfiction.org/story/824/',
                cover: 'background: linear-gradient(330deg, rgba(0,247,255,0.7) 0%, rgba(255,159,172,0.7) 47%, rgba(251,241,65,0.7) 100%);',
                path: '/library/Ty_luchshaya/',
                characters: [
                    {
                        name: 'Rainbow Dash',
                        path: '/ponies/rainbow_dash.png'
                    },
                    {
                        name: 'Fluttershy',
                        path: '/ponies/fluttershy.png'
                    },
                    {
                        name: 'Other ponies',
                        path:'/ponies/other.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I',
                        path: '/library/Ty_luchshaya/1_Ty_luchshaya.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                ]
              },
              {
                id: 19,
                name: 'Внутривенное вмешательство',
                pathName: 'Vnutrivennoe_vmeshatel_stvo',
                wordCount:  7587,
                chaptersCount: 1,
                authorName: 'RePitt',
                authorLink: 'https://tabun.everypony.ru/profile/RePitt/',
                genres: [ 'Зарисовка', 'Повседневность', 'Юмор'],
                sourceLink: 'https://ponyfiction.org/story/14173/',
                cover: 'background: linear-gradient(330deg, rgba(0,247,255,0.7) 0%, rgba(255,159,172,0.7) 47%, rgba(255,255,255,0.7) 90%);',
                path: '/library/Vnutrivennoe_vmeshatel_stvo/',
                characters: [
                    {
                        name: 'Nurse Redheart',
                        path:'/ponies/redheart.png'
                    },
                    {
                        name: 'Starlight Glimmer',
                        path:'/ponies/starlight.png' 
                    },
                    {
                        name: 'Trixie Lulamoon',
                        path:'/ponies/trixie.png' 
                    },
                    {
                        name: 'Other ponies',
                        path:'/ponies/other.png' 
                    },

                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I',
                        path: '/library/Vnutrivennoe_vmeshatel_stvo/1_Razboltannaya_magicheskaya_pushka.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                ]
              },
              {
                id: 20,
                name: 'Высадка на Луне',
                pathName: 'Vysadka_na_Lune',
                wordCount:  2617,
                chaptersCount: 1,
                authorName: 'Yok',
                authorLink: 'https://tabun.everypony.ru/profile/Yokmakarok/',
                genres: [ 'Зарисовка', 'Ангст', 'Юмор', 'Драма', 'Параллельный мир'],
                sourceLink: 'https://ponyfiction.org/story/4025/',
                cover: 'background: linear-gradient(330deg, rgba(0,0,55,0.7) 26%, rgba(164,159,255,0.7) 84%, rgba(255,255,255,0.7) 100%);',
                path: '/library/Vysadka_na_Lune/',
                characters: [
                    {
                        name: 'Princess Luna',
                        path:'/ponies/luna.png'
                    },
                    {
                        name: 'Human(s)',
                        path:'/ponies/human.png'
                    }
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I',
                        path: '/library/Vysadka_na_Lune/1_Vysadka_na_Lune.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                ]
              },
              {
                id: 21,
                name: 'Привет, Рарити',
                pathName: 'Privet_Rariti',
                wordCount:  5078,
                chaptersCount: 1,
                authorName: 'chelovekbeznika',
                authorLink: 'https://ponyfiction.org/accounts/19185/',
                genres: [ 'Юмор', 'Драма'],
                sourceLink: 'https://ponyfiction.org/story/14844/',
                cover: 'background: linear-gradient(113deg, rgba(71,2,180,0.7) 0%, rgba(254,254,254,0.7) 100%);',
                path: '/library/Privet_Rariti/',
                characters: [
                    {
                        name:'Twilight Sparkle', 
                        path: '/ponies/twilight.png'
                    },
                    {
                        name: 'Rarity',
                        path:'/ponies/rarity.png'
                    },
                    {
                        name: 'Applejack',
                        path:'/ponies/applejack.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        name: 'I',
                        path: '/library/Privet_Rariti/1_Privet_Rariti.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                ]
              },
              {
                id: 22,
                name: 'Fallout: Equestria',
                pathName: 'Fallout_Equestria',
                wordCount:  620295,
                chaptersCount: 1,
                authorName: 'Notabenoid (переводчик)',
                authorLink: 'https://www.rulit.me/translator/notabenoid',
                genres: [ 'Кроссовер', 'Приключения', 'Драма'],
                sourceLink: 'https://www.rulit.me/books/follaut-ekvestriya-fallout-equestria-download-280801.html',
                cover: 'background: linear-gradient(166deg, rgba(0,0,0,0.7) 51%, rgba(121,255,134,0.7) 75%, rgba(254,254,254,0.7) 93%);',
                path: '/library/Fallout_Equestria/',
                characters: [
                    {
                        name: 'Little Pip',
                        path:'/ponies/littlepip.png'
                    },
                    {
                        name: 'Velvet Remedy',
                        path:'/ponies/velvet.png'
                    },
                    {
                        name: 'Calamity',
                        path:'/ponies/calamity.png'
                    },
                    {
                        name: 'Xenith',
                        path:'/ponies/xenith.png'
                    },
                    {
                        name: 'SteelHooves',
                        path:'/ponies/steelhooves.png'
                    },
                    {
                        name: 'Homeage',
                        path:'/ponies/homeage.png'
                    },
                ],
                chapters: [
                    {
                        id: 1,
                        
                        path: '/library/Fallout_Equestria/Avtor_neizvesten_Follaut_Ekvestriya_RuLit_Net.html',
                        anchor: '#I',
                        content: '',
                        link: '<div id="I"></div>',
                    },
                ]
              }
        ]            

  },
 /* getters: {
  },
  mutations: {
       /* initialiseStore(state) {
      // Check if the ID exists
      if(localStorage.getItem('store')) {
                // Replace the state object with the stored item
        this.replaceState(
         Object.assign(state, JSON.parse(localStorage.getItem('store') || '{}'))
        );
      }
    }
  },
  actions: {
   /* async fetchFic(){
              
                try{
                  for (let index = 0; index < this.state.libArray.length; index++){
                    for (let i = 0; i < this.state.libArray[index].chapters.length; i++){
                        const res = await fetch(this.state.libArray[index].chapters[i].path);

                        this.state.libArray[index].chapters[i].content = await res.text();                      
                    }
                  }
        
                } catch (e) {
                    console.log(e)
                }
            },
  },
  modules: {
  }*/
})
