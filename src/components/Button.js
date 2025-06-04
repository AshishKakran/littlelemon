import React from 'react';
import { Link } from 'react-router-dom';


function Button({ link, onClick, children }) {
    return (
        <button
            onClick={onClick}
            className="button"
        >
            <Link to={link} className="button-link">
                {children}
            </Link>
        </button>
    );
}


export default Button;