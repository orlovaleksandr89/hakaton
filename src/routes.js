import CommentPage from './pages/CommentPage'
import ErrorPage from './pages/ErrorPage'
import FavoritePage from './pages/FavoritePage'
import MainPage from './pages/MainPage'
import UserPage from './pages/UserPage'
import {
  COMMENT_ROUTE,
  ERROR_ROUTE,
  FAVORITE_ROUTE,
  MAIN_ROUTE,
  USER_ROUTE
} from './utils/const'

export const routes = [
  { path: MAIN_ROUTE, Component: MainPage },
  { path: USER_ROUTE, Component: UserPage },
  { path: ERROR_ROUTE, Component: ErrorPage },
  { path: FAVORITE_ROUTE, Component: FavoritePage },
  { path: COMMENT_ROUTE, Component: CommentPage }
]
