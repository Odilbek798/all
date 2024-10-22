import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <header className="header">
      <div className="container">

        <div className="header__wrapper">
          <div className="header__box">
            <h1>Lorem ipsum dolor sit amet <span>consectetur.</span> </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Nostrum debitis nesciunt tempora esse hic illo excepturi culpa? Eaque, autem error!</p>
            <button>Lorem, ipsum.</button>

          </div>
          <img className='header__img' src="https://abbos29.github.io/dream/img/main.png" alt="" />
        </div>
      </div>
    </header>
    </>
  )
}

export default Header