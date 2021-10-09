import React, { useContext } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import {
  COMMENT_ROUTE,
  FAVORITE_ROUTE,
  MAIN_ROUTE,
  USERS_ROUTE
} from '../utils/const'
import FavoritesContext from '../store/favoriteContext'

function NavBar({ active, setActive }) {
  const links = [
    { route: USERS_ROUTE, name: 'Наша команда' },
    { route: FAVORITE_ROUTE, name: 'Избранное' },
    { route: COMMENT_ROUTE, name: 'Оставить комментарий' }
  ]
  const favoriteCtx = useContext(FavoritesContext)
  const total = localStorage.length

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container className='my-2'>
        <NavLink
          to={MAIN_ROUTE}
          role='button'
          className='me-3 text-light'
          style={{ textDecoration: 'none', fontSize: '1.5rem' }}
          onClick={() => {
            setActive(null)
            document.title = 'Personal site'
          }}
        >
          Dream Team Hakaton
        </NavLink>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <div className='ms-auto '>
            <Nav className='d-flex justify-content-center align-items-center'>
              {links.map((link) => (
                <Link
                  style={{ textDecoration: 'none', fontSize: '1rem' }}
                  className='me-3 text-light'
                  to={link.route}
                  key={link.route}
                >
                  <Button
                    variant={'outline-light'}
                    className={
                      active === link.name
                        ? 'border-0 active position-relative'
                        : 'border-0 position-relative'
                    }
                    onClick={() => {
                      setActive(link.name)
                      document.title = link.name
                    }}
                  >
                    {link.name === 'Избранное' ? (
                      <>
                        {link.name}
                        {favoriteCtx.totalFavorites || localStorage.length ? (
                          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                            {total}
                            <span className='visually-hidden'>
                              unread messages
                            </span>
                          </span>
                        ) : (
                          ''
                        )}
                      </>
                    ) : (
                      link.name
                    )}
                  </Button>
                </Link>
              ))}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
