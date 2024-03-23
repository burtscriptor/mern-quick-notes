import { useState, useEffect } from "react";

const NoteComponent = ({ notes, deleteNote }) => {
    const [reverse, setReverse] = useState(false);

    if (notes.length === 0) {
        return <p>No notes yet</p>;
    }

    const notesList = notes.map((n) => (
        <div class="mb-3" key={n._id}>
            <p>{new Date(n.createdAt).toLocaleString()}</p>
            <p>
                {n.text}
               
            </p>
            <span> <button class="btn btn-primary" onClick={() => deleteNote(n._id)} title='Delete note'>Delete</button></span>
        </div>
    ));

    return (
        <div className="row">
            <button id="ascending" class="btn btn-danger" onClick={() => setReverse(!reverse)} title='Reverse notes order'>
                {reverse ? "Descending" : "Ascending" } 
            </button>
            {reverse ? notesList.reverse() : notesList}
        </div>
    );
};

export default NoteComponent;
