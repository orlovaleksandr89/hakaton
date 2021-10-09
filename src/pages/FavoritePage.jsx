import React, { useContext, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import FavoriteCard from '../components/Favorite_Section/FavoriteCard'
import FavoritesContext from '../store/favoriteContext'

function FavoritePage() {
  const favoriteCtx = useContext(FavoritesContext)

  function allStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length

    while (i--) {
      values.push(localStorage.getItem(keys[i]))
    }

    return values
  }

  useEffect(() => {
    allStorage()
  }, [])
  const users = allStorage()

  const total = localStorage.length

  return (
    <Container>
      {total === 0 ? (
        <h1>Здесь пока что пусто</h1>
      ) : (
        users.map((user) => {
          user = JSON.parse(user)
          return (
            <Card className='mt-2' key={user.id}>
              <FavoriteCard
                member={user}
                removeFavorite={favoriteCtx.removeFavorite}
              />
            </Card>
          )
        })
      )}
    </Container>
  )
}

export default FavoritePage
