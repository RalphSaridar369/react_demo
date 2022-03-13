import {encrypt,decrypt,MD5encrypt} from './cryptoJs';

const secret_key  = "1234"

export const setItem =(key,value)=>{
    sessionStorage.setItem(MD5encrypt(key),encrypt(value, secret_key));
};

export const getItem =(key)=>{
    let keyhash = MD5encrypt(key);
    let val = sessionStorage.getItem(keyhash);
    console.log(val)
}

export const removeKey =(key)=>{
    sessionStorage.removeItem(encrypt(key,secret_key));
}

export const clear =()=>{
    sessionStorage.clear();
}