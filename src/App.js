import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

/* store most of state in top-level app component since states will rely on one another */
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note",
      date: "03/22/2022"
    },
    {
      id: nanoid(),
      text: "Second note",
      date: "04/22/2022"
    },
    {
      id: nanoid(),
      text: "Third Note",
      date: "06/22/2022"
    },
    {
      id: nanoid(),
      text: "Fourth Note",
      date: "07/20/2022"
    },
    {
      id: nanoid(),
      text: "Fifth note",
      date: "08/20/2022"
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

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
    /* NotesList is stored in state. Pass notes variable to NotesList via props */
    /* if darkMode is true, add class dark-mode */
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote = {setSearchText}/>
        <NotesList 
          /* takes current list of notes, filters the notes to include only those that include searchText */
            notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
            handleAddNote={addNote}
          handleDeleteNote={deleteNote} 
        />
      </div>
    </div>
  );
};

export default App;
