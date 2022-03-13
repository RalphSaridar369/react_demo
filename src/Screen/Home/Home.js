import React, { useEffect } from 'react';
import {setItem, getItem} from '../../helpers/storage';

const Home = () =>{
    useEffect(()=>{
        setItem("user","123");
        getItem("user");
    },[])
    return(
        <div>Hello</div>
    )
}

export default Home