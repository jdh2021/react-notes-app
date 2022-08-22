import Note from './Note';

/* destructure prop to get notes passed in*/
const NotesList = ({notes}) => {
    return(
        <div className="notes-list">
            {/*loop over a list and for each note, render a note component.*/  
                notes.map((note) => (
                <Note id ={note.id} text={note.text} date={note.date} />
            ))}
        </div>
    );
};

export default NotesList;