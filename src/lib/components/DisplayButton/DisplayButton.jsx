import React from 'react';
import { Link } from 'react-router-dom';

const DisplayButton = ({buttonLabel,children,value}) => <div className="CC-Display_Button--container">
    <Link to={`/${value}`}>
        {children}
        <button className="CC-Display_Button--button">
            {buttonLabel}
        </button>
    </Link>
</div>;

export default DisplayButton;