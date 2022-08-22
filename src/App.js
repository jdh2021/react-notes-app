import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

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
  return(
    <div className="container">
      <NotesList notes={
        /* NotesList stored in state. need to pass notes variable to 
        NotesList via props */
        notes} />
    </div>
  );
};

export default App;
