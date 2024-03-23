import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api"

const NewNote = ({ user }) => {
const [notes, setNotes] = useState([]);

const [createNote, setCreateNote] = useState("");


const _handleNewNote = async (event) => {
        event.preventDefault();
        addNewNote(createNote);
        setCreateNote("");
        
    } 

const addNewNote = async (createNote) => {
    // try {
        const newNote = await notesAPI.createNote(createNote);
        setNotes(newNote);

    // }catch {
    //     setCreateNote({ error: 'Sign Up Failed - Try Again' });
    //     console.log('you suck from addNewNote catch xx')
    // }
}    


    return (
        <div>
        <h1>New Note</h1>
        <form autoComplete="off" onSubmit={_handleNewNote}> 
        <textarea id="note" value={createNote} onChange={((event) => setCreateNote(event.target.value))}></textarea>
        <button type="submit">Add Note</button>
        </form>
        </div>
    );
    };
    
export default NewNote;