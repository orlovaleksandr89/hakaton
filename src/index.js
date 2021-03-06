import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FavoritesContextProvider } from './store/favoriteContext'

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
