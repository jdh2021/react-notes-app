import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';

/* destructure prop to get the function */
const Search = ({handleSearchNote}) => {
    return(
        <div className="search">
            <AiOutlineFileSearch className="search-icons" size="1.3em" />
            <input 
                onChange={(event)=> 
                    handleSearchNote(event.target.value)
                } 
                type="text" 
            />
        </div>
    );
};

export default Search;