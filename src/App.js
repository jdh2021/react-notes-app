import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';

/* store most of state in top-level app component since states will rely on one another */
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Test note text",
      date: "08/22/2022"
    },
    {
      id: nanoid(),
      text: "2nd test note text",
      date: "04/22/2022"
    },
    {
      id: nanoid(),
      text: "3rd test note text",
      date: "06/22/2021"
    },
    {
      id: nanoid(),
      text: "4th test note text",
      date: "07/20/2022"
    },
    {
      id: nanoid(),
      text: "New note!",
      date: "08/22/2022"
    }
  ]);

  const [searchText, setSearchText] = useState('');

  /* pass addNote function down tree of components */
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(), 
    };
    /* spread operator to take current array and add new note
    bad to mutate state in react */
    const newNotes = [...notes, newNote];
    /* causes components to re-render and list of notes updates */
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    /* filter functions returns a new array */
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  };
  return(
    /* NotesList stored in state. need to pass notes variable to NotesList via props */
    <div className="container">
      <Search handleSearchNote = {setSearchText}/>
      <NotesList 
        /* takes current list of notes, filters the notes to include only those that include searchText */
        notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote} 
      />
    </div>
  );
};

export default App;
