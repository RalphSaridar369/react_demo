var CryptoJS = require("crypto-js");

export const encrypt = (data,secret) =>{
    return CryptoJS.AES.encrypt(data, secret).toString();
}

export const MD5encrypt = (data) =>{
    return CryptoJS.MD5(data);
}

export const decrypt = (data,secret) =>{
    let bytes =  CryptoJS.AES.decrypt(data, secret);
    let original = bytes.toString(CryptoJS.enc.Utf8);
    return original
}