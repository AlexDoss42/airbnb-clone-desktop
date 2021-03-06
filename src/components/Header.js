import React from 'react'
import './Header.css';
import { ExpandMore, Language, Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <div className='header'>
        <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="Airbnb Logo"
        />
        <div className='header__center'>
            <input type="text" />
            <Search />
        </div>
        <div className='header__right'>
            <p>Become a host</p>
            <Language />
            <ExpandMore />
            <Avatar />
        </div>
    </div>
  )
}

export default Header