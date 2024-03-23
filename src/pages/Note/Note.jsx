import { useState, useEffect } from "react";
import { createNote } from "../../utilities/notes-api";
import { findNotes } from "../../utilities/notes-api";
import { deleteNoteAPI } from "../../utilities/notes-api";
import NoteComponent from "../../components/NoteComponent";
import NewNote from "../../components/NewNote";

const Note = () => {
    const [notes, setNotes] = useState([]);
    const [editNote, setEditNote] = useState(null)

    const addNewNote = async (newNote) => {
        const note = await createNote(newNote);
        setNotes([...notes,note]);  
    }    

    async function deleteNote(id) {
        console.log('this delete on page')
        await deleteNoteAPI(id);
        const updatedNotes = notes.filter((n) => n._id !== id);
        setNotes(updatedNotes);
    }

    useEffect(function () {
        const _findNotes = async () => {
          
            try {
                const userNotes = await findNotes(); 
                setNotes(userNotes)
              } catch {
                // An error occurred 
                setNotes({ error: 'Could not find notes' });
              }
            }
            _findNotes();
            }, []);

    return (
        <div className="row">
        
        <NewNote addNewNote={addNewNote}  />
        <NoteComponent notes={notes} deleteNote={deleteNote} />
      
        </div>
    );
    };
export default Note;