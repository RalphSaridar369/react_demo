import {encrypt,decrypt,MD5encrypt} from './cryptoJs';

const secret_key  = "1234"

export const setItem =(key,value)=>{
    let val = JSON.stringify(value)
    sessionStorage.setItem(MD5encrypt(key),encrypt(val, secret_key));
};

export const getItem =(key)=>{
    let keyhash = MD5encrypt(key);
    let val = decrypt(sessionStorage.getItem(keyhash), secret_key);
    return JSON.parse(val);
}

export const removeKey =(key)=>{
    sessionStorage.removeItem(encrypt(key,secret_key));
}

export const clear =()=>{
    sessionStorage.clear();
}