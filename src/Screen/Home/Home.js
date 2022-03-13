import React, { useEffect } from 'react';
import {setItem, getItem} from '../../helpers/storage';
import './style.scss';

const Home = () =>{
    useEffect(()=>{
        setItem("user","123");
        getItem("user");
    },[])
    return(
        <div className='home__header'>Hello</div>
    )
}

export default Home