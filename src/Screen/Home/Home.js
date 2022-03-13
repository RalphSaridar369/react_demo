import React, { useContext, useEffect } from 'react';
import {setItem, getItem} from '../../helpers/storage';
import { MainContext } from '../../MainContext';
import './style.scss';

const Home = () =>{
    const [state,dispatch] = useContext(MainContext)
    useEffect(()=>{
        setItem("user","123");
        getItem("user");
        console.log(state)
    },[])
    return(
        <div className='home__header'>Hello</div>
    )
}

export default Home
