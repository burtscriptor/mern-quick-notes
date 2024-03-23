import sendRequest from './send-request';
const BASE_URL = '/api/users';


export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials); 
}


const checkToken = async () => {
  return sendRequest(`${BASE_URL}/check-token`);
};


export default checkToken;