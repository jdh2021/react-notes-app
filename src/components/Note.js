import { BsTrash } from 'react-icons/bs';

/* descture props passed in from NotesList to Note component */
const Note = ({id, text, date}) => {
    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <BsTrash className="delete-icon" size="1.3rem" />
            </div>
        </div>
    );
};

export default Note;