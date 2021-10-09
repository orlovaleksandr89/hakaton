
import PhotoVera from "../components/Photos/vera.jpg";
import PhotoRuslan from "../components/Photos/ruslan.jpg";
import PhotoAlex from "../components/Photos/alex.jpg";
import PhotoKirill from "../components/Photos/kirill.jpg";
import PhotoNick from "../components/Photos/nick.jpg";


export const members = [
  {
    id: 1,
    name: 'Олександр Орлов',
    age: '31',
    image: PhotoAlex,
    about: 'Front-End Developer',
    social: ['https://t.me/AlexOrlov89', ''],
    tasks: ' разработка компонента коментариев',

    skills: {
      HTML: 100,
      CSS: 100,
      JavaScript: 100,
      ReactJS: 100,
    },
    isLeader: true,
  },
  {
    id: 2,
    name: 'Руслан Прокопец',
    age: 26,
    image: PhotoRuslan,
    about: 'Front-End Developer',
    social: ['https://t.me/Kyoto430', ''],
    tasks: ' разработка компонента карточек команды',
    skills: {
      HTML: 100,
      CSS: 100,
      JavaScript: 80,
      ReactJS: 50,
    },
    isLeader: false,
  },
  {
    id: 3,
    name: 'Вера Милякова',
    age: '31',
    image: PhotoVera,
    about: 'Front-End Developer',
    social: ['telegram', 'vk'],
    tasks: 'Задачи проекта',
    skills: {
      HTML: 90,
      CSS: 80,
      JavaScript: 100,
      ReactJS: 50,
    },
    isLeader: false,
  },
  {
    id: 4,
    name: 'Nick Anufriev',
    age: 'x',
    image: PhotoNick,
    about: 'Front-End Developer',
    social: ['telegram', 'vk'],
    tasks: 'Задачи проекта',
    skills: {
      HTML: 100,
      CSS: 100,
      JavaScript: 100,
      ReactJS: 100,
    },
    isLeader: false,
  },
  {
    id: 5,
    name: 'Discipline',
    age: 'x',
    image: PhotoKirill,
    about: 'Front-End Developer',
    social: ['telegram', 'vk'],
    tasks: 'Задачи проекта',
    skills: {
      HTML: 100,
      CSS: 100,
      JavaScript: 100,
      ReactJS: 100,
    },

    isLeader: false,
  },

];

export const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(members);
    }, 1500);
  });

