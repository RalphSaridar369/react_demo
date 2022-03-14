import React, { useState } from 'react';
import './Header.scss';
import Drawer from '@mui/material/Drawer';

import { clear, getItem } from '../../helpers/storage';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);

    const styles = {
        icon: {
            color: '#FF6863',
            fontSize: 40
        },
        linkIcon: {
            color: '#FF6863',
            fontSize: 40,
            marginRight: 20
        }
    }



    let LoggedIn = getItem("user")
    let Logout = () => {
        clear()
    }

    const Links = [
        {
            to: "/",
            icon: <HomeOutlinedIcon style={styles.linkIcon} />,
            text: 'Home',
            type: 'normal',
            onClick: ()=>{}
        },
        {
            to: LoggedIn ? "/" : "/login",
            icon: LoggedIn ? <LogoutOutlinedIcon style={styles.linkIcon} /> : <LoginOutlinedIcon style={styles.linkIcon} />,
            text: LoggedIn ? 'Logout' : 'Login',
            type: 'normal',
            onClick: () => {
                if (LoggedIn){
                    Logout()
                    setOpen(false)
                }
            }
        }
    ]

    const mapLinks = () => {
        return Links.map((item, index) => {
            switch (item.type) {
                case 'normal':
                    return <Link to={item.to} className="inside__drawer__container" key={index} onClick={()=>item?.onClick()}>
                        {item.icon}
                        <p className='inside__drawer__container__link'>{item.text}</p>
                    </Link>
            }

        })
    }

    return (
        <div className='header'>
            <div className='header__left'>
                <img src='./assets/logo.png' className='img__logo' />
            </div>
            <div className='header__right'>
                <div className='header__right__icon' onClick={() => setOpen(true)}>
                    <MenuIcon style={styles.icon} />
                </div>
            </div>

            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className='inside__drawer'>
                    <img src='./assets/logo.png' className='inside__drawer__logo' />
                    {mapLinks()}
                </div>
            </Drawer>
        </div>
    )
}

export default Header