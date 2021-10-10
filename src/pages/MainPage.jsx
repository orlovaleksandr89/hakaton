import React from 'react'
import { Link } from 'react-router-dom'
import { COMMENT_ROUTE } from '../utils/const'
import reactLogo from '../components/Photos/logo512.png'
import { members } from '../data/Data'

function MainPage() {
  const stack = [
    'React',
    'React-Router-Dom',
    'Bootstrap',
    'React-Bootstrap',
    'Moment.js',
    'Font-Awesome'
  ]
  return (
    <div className='container'>
      <div className='d-flex flex-column'>
        <h4 className='text-center border-bottom py-4 shadow-sm'>
          Немного о нашей команде
        </h4>

        <div className='d-flex align-items-center justify-content-center'>
          <img className='App-logo' src={reactLogo} alt='reactLogo' />
        </div>
        <div className='main_page_block_1'>
          <p>
            Вашему вниманию представляется проект, который разработала наша
            команда в составе:
          </p>
          <ul className=' fw-bold mt-2'>
            {members.map((user) => (
              <Link
                to={`hakaton/users/${user.id}`}
                className='text-decoration-none text-dark '
                key={user.id}
              >
                <li className='my-2 comment'>{user.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p>В данном проекте мы использовали следующий стэк технологий:</p>
          <ul className=' fw-bold mt-2'>
            {stack.map((item) => (
              <li className='my-2' key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className='text-center'>
          Если вам понравился наш проект, пожалуйста{' '}
          <Link to={COMMENT_ROUTE}>оставте комментарий</Link>
        </p>
      </div>
    </div>
  )
}

export default MainPage
