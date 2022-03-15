import {encrypt,decrypt,MD5encrypt} from './cryptoJs';

const secret_key  = "1234"

export const setItem =(key,value)=>{
    let val = JSON.stringify(value)
    // sessionStorage.setItem(MD5encrypt(key),encrypt(val, secret_key));
    sessionStorage.setItem(key,val)
};

export const getItem =(key)=>{
    // let keyhash = MD5encrypt(key);
    // let val = decrypt(sessionStorage.getItem(keyhash), secret_key);
    // return JSON.parse(val);
    let data = sessionStorage.getItem(key)
    return JSON.parse(data)
}

export const removeKey =(key)=>{
    sessionStorage.removeItem(key/* encrypt(key,secret_key) */);
}

export const clear =()=>{
    sessionStorage.clear();
}