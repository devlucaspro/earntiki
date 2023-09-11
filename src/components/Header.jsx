import React from 'react'

const Header = () => {
  return (
    <>
    <header className="container">
      <img src="./assets/logo.png" alt="Earntiki" width={145} />
      <a href="#checkout">Buy eBook <i className="fa-solid fa-arrow-right"></i></a>
    </header>
    <hr className='header-hr' />
    </>
  )
}

export default Header