var CryptoJS = require("crypto-js");

export const encrypt = (data,secret) =>{
    return CryptoJS.AES.encrypt(data, secret).toString();
}

export const decrypt = (data,secret) =>{
    let bytes =  CryptoJS.AES.decrypt(data, secret);
    let original = bytes.toString(CryptoJS.enc.Utf8);
    return original
}