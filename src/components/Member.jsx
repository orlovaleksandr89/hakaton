import React from 'react'
import { Link } from 'react-router-dom'
import BadgeMember from './Badge'

const Member = ({ members }) => {
  const styles = {
    width: '20rem'
  }
  return (
    <div className='container'>
      <div className='d-flex flex-wrap justify-content-center'>
        {members.map((member) => (
          <div key={member.id} className='m-2'>
            <div className='card' style={styles}>
              <img
                src={member.image}
                className='img-fluid w-50 bg-dark rounded-circle mx-auto m-2'
                alt='...'
              />
              <div className='card-body shadow'>
                <h5 className='card-title'>
                  {member.name}
                  {member.isLeader ? (
                    <BadgeMember color='success' text='Team Leader' />
                  ) : null}
                </h5>
                <h5 className='card-tite'>{`Возраст: ` + member.age}</h5>
                <p className='card-text'>{`О себе: ` + member.about}</p>
                <div className='d-flex justify-content-between'>
                  <Link
                    to={`users/${member.id}`}
                    className='btn btn-primary m-2'
                  >
                    Открыть
                  </Link>
                  <button className='btn btn-sm btn-secondary'>
                    Добавить в избранное
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Member
