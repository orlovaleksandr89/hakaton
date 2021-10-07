import React from 'react'

function Footer() {
  return (
    <footer className='footer d-flex justify-content-center mt-auto py-3 bg-light'>
      <ul className='nav col-md-4 justify-content-center list-unstyled d-flex w-100'>
        <li className='ms-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <span> See code on GitHub for more information</span>
            <h3>
              <a
                className='text-dark text-decoration-none'
                href='https://github.com/orlovaleksandr89/hakaton'
                target='blank'
              >
                <i className='bi bi-github'></i>
              </a>
            </h3>
          </div>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
