import React from 'react';

const Header = ({handleToggleDarkMode}) => {
    return(
        <div className="header">
            <h1>Notes</h1>
            <button 
                onClick={() => 
                    /* calling a setter function to get access to current state value by passing in arrow function with argument */
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className="save">
                    Toggle Color
            </button>
        </div>
    );
};

export default Header;