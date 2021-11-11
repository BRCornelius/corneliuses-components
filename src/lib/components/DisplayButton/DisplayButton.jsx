import React from 'react';
import { Link } from 'react-router-dom';

const DisplayButton = ({buttonLabel,children,value}) => <div>
    <Link to={`/${value}`}>
        {children}
        <button>
            {buttonLabel}
        </button>
    </Link>
</div>;

export default DisplayButton;