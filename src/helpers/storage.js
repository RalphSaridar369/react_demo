import {encrypt,decrypt} from './cryptoJs';

const secret_key  = "1234"

export const setItem =(key,value)=>{
    sessionStorage.setItem(encrypt(key,secret_key),encrypt(value, secret_key));
};

export const getItem =(key)=>{
    let keyhash = encrypt(key,secret_key);
    let val = sessionStorage.getItem(keyhash);
    // console.log(val)
    console.log(keyhash)
    console.log(val)
}

export const removeKey =(key)=>{
    sessionStorage.removeItem(encrypt(key,secret_key));
}

export const clear =()=>{
    sessionStorage.clear();
}