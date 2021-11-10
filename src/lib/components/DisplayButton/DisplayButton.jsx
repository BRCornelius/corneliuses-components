import React from 'react';

const DisplayButton = ({buttonLabel, children}) => <div>
    {children}
    <button>
        {buttonLabel}
    </button>
</div>;

export default DisplayButton;