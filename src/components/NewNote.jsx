import { useEffect, useState } from "react";
import * as notesAPI from "../utilities/notes-api"

const NewNote = ({addNewNote }) => {
const [newNote, setNewNote] = useState("");



const _handleNewNote = async (event) => {
        event.preventDefault();
        addNewNote(newNote);
        setNewNote("");   
} 


return (
        <div class="mb-3">
           
        <form autoComplete="off" onSubmit={_handleNewNote}> 
        <textarea class="form-control" id="note" value={newNote} onChange={((event) => setNewNote(event.target.value))}></textarea>
        <button type="submit" class="btn btn-warning">Add Note</button>
        </form>

        </div>
);
};
    
export default NewNote;