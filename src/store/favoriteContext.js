import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteUser) => {},
  removeFavorite: (id) => {},
  userIsFavorite: (id) => {}
})

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([])

  function addFavotiteHandler(favoriteUser) {
    localStorage.setItem(favoriteUser.id, JSON.stringify(favoriteUser))
    setFavorites((prev) => {
      return prev.concat(favoriteUser)
    })
  }

  function removeFavoriteHandler(id) {
    localStorage.removeItem(id)
    setFavorites((prev) => {
      return prev.filter((user) => user.id !== id)
    })
  }

  function userIsFavoriteHandler(id) {
    return favorites.some((user) => user.id === id)
  }

  const context = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavotiteHandler,
    removeFavorite: removeFavoriteHandler,
    userIsFavorite: userIsFavoriteHandler
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext
