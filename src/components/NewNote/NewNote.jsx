import { useState } from 'react';

export default function NewNote({ addNote }) {
  const [note, setNote] = useState('');

  function handleAddNote() {
    addNote(note);
    setNote('');
  }
  
  return (
    <>
    <h3>Add a Note</h3>
    <input value={note} onChange={(evt) => setNote(evt.target.value)}/>
    <button onClick={handleAddNote}>Add Note</button>
    </>
  )
}