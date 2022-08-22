import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';

const Search = () => {
    return(
        <div className="search">
            <AiOutlineFileSearch className="search-icons" size="1.3em" />
            <input type="text" placeholder="search"></input>
        </div>
    );
};

export default Search;