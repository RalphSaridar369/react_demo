import React from 'react';
import './Header.scss';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src='./assets/logo.png' className='img__logo'/>
        </div>
        <div className='header__right'>
            <div className='header__right__icon'>
                <MenuIcon style={{color:'#FF6863', fontSize:40}} />
            </div>
        </div>
    </div>
  )
}

export default Header