import React from 'react'
import { members } from '../data/Data'
import { getMemberById } from '../utils/functions'
import PageError from '../pages/ErrorPage'
import { ProgressBar } from 'react-bootstrap'
import BadgeMember from './Badge'
import { Link } from 'react-router-dom'
import { PERSONAL_USER_ROUTE } from '../utils/const'
import './styles/RenderCard.css'

const RenderCard = ({ id }) => {
  const memberById = getMemberById(members, id)
  if (!memberById?.id) {
    return <PageError />
  }
  return (
    <div className='block__user-card w-100 shadow p-4 mb-5'>
      <section className='info'>
        <div className='left-block'>
          <div className='left-block-title'>
            <h1>{memberById.name}</h1>
            {memberById.isLeader ? (
              <BadgeMember
                castomStyle='badge-renderCard'
                color='success'
                text='Team Leader'
              />
            ) : (
              <BadgeMember
                castomStyle='badge-renderCard'
                color='warning'
                text='DEVELOPER'
              />
            )}
          </div>
          <div className='left-block-about'>
            <span>{`Город: ` + memberById.town}</span>
            <span>{`Возраст: ` + memberById.age}</span>
            <span>{`О себе: ` + memberById.about}</span>
          </div>
          <div className='left-block-tasks'>
            <h5>Задачи на проекте:</h5>
            <p>{memberById.tasks}</p>
          </div>
        </div>
        <div className='right-block'>
          <div className='photo'>
            <img
              className='photo-img'
              src={memberById.image}
              alt={memberById.id}
            />
          </div>
          <div className='social'>
            {Object.keys(memberById.social).map((item) => {
              return (
                <a href={memberById.social[item]} target='blank' key={item}>
                  <i className={'social-icon fab fa-' + String(item)}></i>
                </a>
              )
            })}
          </div>
        </div>
      </section>
      <section className='progressBar'>
        <div className='progress-block'>
          <span className='progress-block-span'>технологии</span>
          <div className='progress-block-content'>
            {Object.keys(memberById.skills).map((skill) => (
              <div key={skill} className='mt-2'>
                <h6>{skill}</h6>
                <ProgressBar
                  now={memberById.skills[skill]}
                  label={`${memberById.skills[skill]}%`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <div className='d-flex justify-content-center m-2'>
          {Number(id) === 3 ? (
            <Link to={PERSONAL_USER_ROUTE}>
              <button className='btn btn-primary m-2'>
                Перейти в личный компонент
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default RenderCard
