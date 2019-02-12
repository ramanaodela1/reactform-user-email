import axios from 'axios';
import appConstants from './appConstants';
const CryptoJS = require("crypto-js");
/*
  Method_name: getDefaultOptions
  Description: set the Token in request's header
*/
function getDefaultOptions() {
  let token = generateToken();
  return {headers: {Token: token}};
}
/*
  Method_name: validateResponse
  Description: validating response received from the server
*/
function validateResponse(res) {
  res.then(() => {},
    (error) => {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
      }
    },
  );
}
/*
  Method_name: generateToken
  Description: to generate random token
*/
function generateToken (){
  let header = appConstants.header;
  let secret = appConstants.secret;

  let UTCstring = Math.floor(((new Date()).getTime() + (1 * 60 * 1000)) / 1000);
  let data = {
    "exp": UTCstring
  };
  let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
  let encodedHeader = CryptoJS.enc.Base64.stringify(stringifiedHeader);
  let stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
  let encodedData = CryptoJS.enc.Base64.stringify(stringifiedData);

  let signature = encodedHeader + "." + encodedData;
  signature = CryptoJS.HmacSHA256(signature, secret);
  signature = CryptoJS.enc.Base64.stringify(signature);

  let jwtToken = encodedHeader+'.'+encodedData+'.'+signature;
  return jwtToken;
}
const ApiClient = {
  /*
    Method_name: apiGet
    Description: to make the api request type get
  */
  apiGet(path) {
    const res = axios.get(path, getDefaultOptions());
    validateResponse(res);
    return res;
  },
  /*
    Method_name: apiPost
    Description: to make the api request type post
  */
  apiPost(path, payload, options) {
    const optionsWithDefaults = { ...getDefaultOptions(), ...options };
    const res = axios.post(path, payload, optionsWithDefaults);
    validateResponse(res);
    return res;
  },
  /*
    Method_name: apiPut
    Description: to make the api request type put
  */
  apiPut(path, payload, options) {
    const optionsWithDefaults = { ...getDefaultOptions(), ...options };
    const res = axios.put(path, payload, optionsWithDefaults);
    validateResponse(res);
    return res;
  },
  /*
    Method_name: apiDelete
    Description: to make the api request type delete
  */
  apiDelete(path, payload, options) {
    const optionsWithDefaults = { ...getDefaultOptions(), ...options, data: payload };
    const res = axios.delete(path, optionsWithDefaults);
    validateResponse(res);
    return res;
  },
};

export default ApiClient;
