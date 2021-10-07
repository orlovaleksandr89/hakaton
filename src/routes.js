import CommentPage from './pages/CommentPage'
import ErrorPage from './pages/ErrorPage'
import FavoritePage from './pages/FavoritePage'
import MainPage from './pages/MainPage'
import SingleUserPage from './pages/SingleUserPage'
import UsersPage from './pages/UsersPage'
import {
  COMMENT_ROUTE,
  ERROR_ROUTE,
  FAVORITE_ROUTE,
  MAIN_ROUTE,
  SINGLE_USER_ROUTE,
  USERS_ROUTE
} from './utils/const'

export const routes = [
  { path: MAIN_ROUTE, Component: MainPage },
  { path: USERS_ROUTE, Component: UsersPage },
  { path: SINGLE_USER_ROUTE, Component: SingleUserPage },
  { path: ERROR_ROUTE, Component: ErrorPage },
  { path: FAVORITE_ROUTE, Component: FavoritePage },
  { path: COMMENT_ROUTE, Component: CommentPage }
]
