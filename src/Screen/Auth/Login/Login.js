import React, {useContext, useState} from 'react'
import './styles.scss';
import { PassInput, TextInput } from '../../../Components/TextInput/TextInput';
import Button from '../../../Components/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { formValidator } from '../../../helpers/formValidator';
import { MainContext } from '../../../MainContext'
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();

  const [userCred, setUserCred] = useState({
    email:"",
    password:"",
  })
  const [ state, dispatch ] = useContext(MainContext) 

  const handleLogin =()=>{
    formValidator(userCred,"login",()=>{
      let choice = window.confirm("Do you want to signin as seller ?");
      dispatch({type:"SIGN_IN",payload:{
        UserData:{
          ...userCred,
          user_type:choice?2:1
        }
      }})
      // navigate('/')
    })
  }

  return (
    <div className="login__main">
      <div className='login__card'>
        <h1>Login</h1>
        <TextInput startIcon={<PersonOutlineIcon/>} onChange={(e)=>setUserCred({...userCred,email:e.target.value})} label="email" placeholder="User123@yopmail.com"/>
        <PassInput startIcon={<LockOutlinedIcon/>} onChange={(e)=>setUserCred({...userCred,password:e.target.value})} label="password" placeholder="********"/>
        <Button text="Login" onClick={()=>handleLogin()}/>
        <a href="/register" className='login__card__link'>Don't have an account ? register now</a>
      </div>
    </div>
  )
}

export default Login