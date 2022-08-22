import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return(
        <div className="note">
            <span>First Note!</span>
            <div className="note-footer">
                <small>8/22/22</small>
                <MdDeleteForever className="delete-icon" size="1.3rem" />
            </div>
        </div>
    );
};

export default Note;