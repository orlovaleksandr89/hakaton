import PhotoVera from '../components/Photos/vera.jpg'
import PhotoRuslan from '../components/Photos/ruslan.jpg'
import PhotoAlex from '../components/Photos/alex.jpg'
import PhotoKirill from '../components/Photos/kirill.jpg'
import PhotoNick from '../components/Photos/nick.jpg'

export const members = [
  {
    id: 1,
    town: 'Кривой Рог, Украина',
    name: 'Олександр Орлов',
    age: '31',
    image: PhotoAlex,
    about: 'Front-End Developer',
    social: {
      telegram: 'https://t.me/AlexOrlov89',
      github: 'https://github.com/orlovaleksandr89',
      linkedin: 'https://www.linkedin.com/in/oleksandr-orlov-9b6525108/'
    },
    tasks: 'Компонент коментариев, компонент избранное, настройка FireBase',

    skills: {
      HTML: 98,
      CSS: 90,
      JavaScript: 90,
      ReactJS: 90
    },
    isLeader: true
  },
  {
    id: 2,
    town: '',
    name: 'Руслан Прокопец',
    age: 26,
    image: PhotoRuslan,
    about: 'Front-End Developer',
    social: {
      telegram: 'https://t.me/Kyoto430',
      github: 'https://github.com/kyoto430'
      // linkedin: ''
    },
    tasks: ' разработка компонента карточек команды',
    skills: {
      HTML: 100,
      CSS: 100,
      JavaScript: 80,
      ReactJS: 50
    },
    isLeader: false
  },
  {
    id: 3,
    town: '',
    name: 'Вера Милякова',
    age: '31',
    image: PhotoVera,
    about: 'Front-End Developer',
    social: {
      telegram: 'https://t.me/VeraMilyakova',
      github: 'https://github.com/Milyakova'
      // linkedin: ''
    },
    tasks: 'Настройка главной страницы, личный компонент',
    skills: {
      HTML: 90,
      CSS: 80,
      JavaScript: 100,
      ReactJS: 50
    },
    isLeader: false
  },
  {
    id: 4,
    town: '',
    name: 'Nick Anufriev',
    age: 'x',
    image: PhotoNick,
    about: 'Front-End Developer',
    social: {
      telegram: 'https://t.me/Whatyoudo31',
      github: 'https://github.com/whatyoudo31'
      // linkedin: ''
    },
    tasks: 'Задачи проекта',
    skills: {
      HTML: 100,
      CSS: 100,
      JavaScript: 100,
      ReactJS: 100
    },
    isLeader: false
  },
  {
    id: 5,
    name: 'Кирилл Бароха',
    town: 'Новополоцк',
    age: '27',
    image: PhotoKirill,
    about: 'Front-End Developer',
    social: {
      telegram: 'https://t.me/Barokha_Kiryl',
      github: 'https://github.com/disciplineHub'
      // linkedin: ''
    },
    tasks: 'Доработка и полировка компонентов, правка кода',
    skills: {
      HTML: 100,
      CSS: 100,
      JavaScript: 100,
      ReactJS: 100
    },

    isLeader: false
  }
]

export const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(members)
    }, 500)
  })
