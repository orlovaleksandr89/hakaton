import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoritesContext from '../store/favoriteContext'
import BadgeMember from './Badge'

function SingleMemberCard({ member }) {
  const styles = {
    width: '20rem'
  }
  const favoriteCtx = useContext(FavoritesContext)
  const userIsFavorite = favoriteCtx.userIsFavorite(member.id)
  const toggleFavoriteUserHandler = () => {
    console.log(localStorage)
    console.log(favoriteCtx.favorites)

    if (userIsFavorite) {
      favoriteCtx.removeFavorite(member.id)
    } else {
      favoriteCtx.addFavorite(member)
    }
  }
  return (
    <div key={member.id} className='m-2'>
      <div className='card' style={styles}>
        <img
          src={member.image}
          className='img-fluid w-50 bg-dark rounded-circle mx-auto m-2'
          alt=''
        />

        <div className='card-body shadow'>
          <h5 className='card-title'>
            {member.name}
            {member.isLeader ? (
              <BadgeMember color='success' text='Team Leader' />
            ) : (
              <BadgeMember color='warning' text='Developer' />
            )}
          </h5>
          <h5 className='card-tite'>{`Возраст: ` + member.age}</h5>
          <p className='card-text'>{`О себе: ` + member.about}</p>
          <div className='d-flex justify-content-between'>
            <Link to={`users/${member.id}`}>
              <button className='btn btn-sm btn-primary'>Подробнее</button>
            </Link>
            <button
              onClick={() => {
                toggleFavoriteUserHandler()
              }}
              className={`btn btn-sm ${
                userIsFavorite ? 'btn-danger' : 'btn-success'
              }`}
            >
              {userIsFavorite
                ? 'Удалить из избранного'
                : 'Добавить в избранное'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleMemberCard
