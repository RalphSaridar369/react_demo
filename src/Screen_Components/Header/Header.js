import React, { useState } from 'react';
import './Header.scss';
import Drawer from '@mui/material/Drawer';

import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);

    const styles ={
        icon:{
            color: '#FF6863',
            fontSize: 40
        },
        linkIcon:{
            color: '#FF6863',
            fontSize: 40,
            marginRight:20
        }
    }
    
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='./assets/logo.png' className='img__logo' />
            </div>
            <div className='header__right'>
                <div className='header__right__icon' onClick={()=>setOpen(true)}>
                    <MenuIcon style={styles.icon} />
                </div>
            </div>
            
                <Drawer
                    anchor="right"
                    open={open}
                    onClose={()=>setOpen(false)}
                >
                    <div className='inside__drawer'>
                        <img src='./assets/logo.png' className='inside__drawer__logo' />
                        <Link to="/" className="inside__drawer__container">
                            <HomeOutlinedIcon style={styles.linkIcon} />
                            <p className='inside__drawer__container__link'>Home</p>
                        </Link>
                    </div>
                </Drawer>
        </div>
    )
}

export default Header