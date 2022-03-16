import React, { useState } from 'react';
import './styles.scss';
import { PassInput, TextInput } from '../../../Components/TextInput/TextInput';
import Button from '../../../Components/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { formValidator } from '../../../helpers/formValidator';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import DocPicker from '../../../Components/DocumentPicker/DocPicker';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { brands, categories } from '../../../mockData';
import Select from '../../../Components/Select/Select';

const Register = () => {

  const [userType, setUserType] = useState(1)
  const [userCred, setUserCred] = useState({ email: '', password: '', confirm: '', id: {}, company: {}, category:{}, brand:{} })
  const handleRegister = () => {
    if(userType==1){
      delete userCred.company
      delete userCred.category
      delete userCred.brand
    }
    formValidator(userCred, "register", () => {
      alert("User was registered successfully");
    })
  }

  const styles = {
    RadioGroup: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "space-between",
      flex: 1
    }
  }

  return (
    <div className='register__main'>
      <div className='register__card'>
        <h1>Register</h1>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={1}
            style={styles.RadioGroup}
            name="radio-buttons-group"
            value={userType}
            onChange={(e) => {
              setUserType(e.target.value)
            }}
          >
            <FormControlLabel value={1} control={<Radio />} label="Buyer" />
            <FormControlLabel value={2} control={<Radio />} label="Seller" />
          </RadioGroup>
        </FormControl>
        <TextInput startIcon={<PersonOutlineIcon />} value={userCred.email} onChange={(e) => setUserCred({ ...userCred, email: e.target.value })} label="email" placeholder="User123@yopmail.com" />
        <PassInput startIcon={<LockOutlinedIcon />} value={userCred.password} onChange={(e) => setUserCred({ ...userCred, password: e.target.value })} label="password" placeholder="********" />
        <PassInput startIcon={<LockOutlinedIcon />} value={userCred.confirm} onChange={(e) => setUserCred({ ...userCred, confirm: e.target.value })} label="confirm password" placeholder="********" />
        <DocPicker text="Id pdf" startIcon={<ArticleOutlinedIcon htmlColor="#FF6863" />} onChange={(e) => setUserCred({ ...userCred, id: e.target.files[0] })} types={['pdf']} />
        {userType==2 && <><DocPicker text="Company" startIcon={<ArticleOutlinedIcon htmlColor="#FF6863" />} onChange={(e) => setUserCred({ ...userCred, company: e.target.files[0] })} types={['pdf']} />
          <Select
            isSearchable 
            value={userCred.category}
            onChange={(e)=>setUserCred({...userCred, category:e})}
            options={categories}
          />
          <Select
            isSearchable 
            value={userCred.brand}
            onChange={(e)=>setUserCred({...userCred, brand:e})}
            options={brands}
          /></>}
        <Button text="Register" onClick={() => handleRegister()} />
        <a href="/login" className='register__card__link'>Already have an account ? login now</a>
      </div>
    </div>
  )
}

export default Register