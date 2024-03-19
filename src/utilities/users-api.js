import sendRequest from './send-request';
const BASE_URL = '/api/users';
// const BASE_URL_LOGIN = '/api/login';

// Refactored code below
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function logIn(credentials) {
  console.log('api-service login triggered');
  console.log('is cred.', credentials);
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials); 
}


const checkToken = async () => {
  console.log('this is users api cToken')
  return sendRequest(`${BASE_URL}/check-token`);
};


export default checkToken;