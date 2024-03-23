import { useState, useEffect } from "react";
import { findNotes } from "../utilities/notes-api";

const Note = ({ user }) => {
    const [notes, setNotes] = useState([]);
    
  

    useEffect(function () {
    const _findNotes = async () => {
        
       
        try {
            const userNotes = await findNotes(); 
            console.log('Un',  userNotes)
            setNotes(userNotes)
          } catch {
            // An error occurred 
            setNotes({ error: 'Could not find notes' });
          }
        }
        _findNotes();
        }, []);

    return (
        <>
        {notes ? !notes : <div>Notes coming soon </div> }
        
        {notes.map((n) =>(
          <p>{n.text}</p>
        ))}
        
        </>
    );
};

export default Note;