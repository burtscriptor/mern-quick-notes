import sendRequest from './send-request';
const BASE_URL = '/api/notes';


export function createNote(createNote) {
    
    return sendRequest(`${BASE_URL}`, 'POST', { text: createNote} )
};

export function findNotes() {
    
    return sendRequest(`${BASE_URL}/`, 'GET')
};
  
export function deleteNoteAPI(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}