import React from 'react'
import { Link } from 'react-router-dom'
import { COMMENT_ROUTE } from '../utils/const'

function MainPage() {
  return (
    <div className='container'>
      <div className='d-flex flex-column'>
        <div>
          <h4 className='text-center border-bottom pb-4 shadow-sm'>
            Немного о нашей команде
          </h4>
          <p>
            Вашему вниманию представляется проект который разработала наша
            команда в составе:
          </p>
          <ul className=' fw-bold mt-2'>
            <li>Вера Милякова</li>
            <li>Руслан Прокопец</li>
            <li>Олександр Орлов</li>
            <li>Nick Anufriev</li>
            <li>Discipline</li>
          </ul>
          <p>В данном проекте мы использовали следующий стэк технологий:</p>
          <ul className=' fw-bold mt-2'>
            <li>React</li>
            <li>React-Router-Dom</li>
            <li>Bootstrap</li>
            <li>React-Bootstrap</li>
          </ul>
          <p>
            Если вам понравился наш проект, пожалуйста{' '}
            <Link to={COMMENT_ROUTE}>оставте комментарий</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainPage
