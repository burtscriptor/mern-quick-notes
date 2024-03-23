import sendRequest from './send-request';
const BASE_URL = '/api/notes';


export function createNote(createNote) {
    
    return sendRequest(`${BASE_URL}`, 'POST', { text: createNote} )
};

export function findNotes() {
    console.log('this is api service findNotes')
    return sendRequest(`${BASE_URL}/`, 'GET')
};
  