import React, { useState } from 'react';
import './styles.scss';
import { PassInput, TextInput } from '../../../Components/TextInput/TextInput';
import Button from '../../../Components/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { formValidator } from '../../../helpers/formValidator';

const Register = () => {
    
    const [userCred,setUserCred] = useState({ email: '', password:'', confirm:''})
    const handleRegister = () =>{

    }

    return (
    <div className='register__main'>
      <div className='register__card'>
        <h1>Register</h1>
        <TextInput startIcon={<PersonOutlineIcon/>} onChange={(e)=>setUserCred({...userCred,email:e.target.value})} label="email" placeholder="User123@yopmail.com"/>
        <PassInput startIcon={<LockOutlinedIcon/>} onChange={(e)=>setUserCred({...userCred,password:e.target.value})} label="password" placeholder="********"/>
        <PassInput startIcon={<LockOutlinedIcon/>} onChange={(e)=>setUserCred({...userCred,password:e.target.value})} label="confirm password" placeholder="********"/>
        <Button text="Register" onClick={()=>handleRegister()}/>
        <a href="/login" className='register__card__link'>Already have an account ? login now</a>
      </div>
    </div>
  )
}

export default Register