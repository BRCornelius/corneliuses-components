import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DisplayButton = ({buttonLabel,children,value}) => <Link to={`/${value}`} className="CC-Display_Button--container">
    {children}
    <button className="CC-Display_Button--button">
        {buttonLabel}
    </button>
</Link>;

DisplayButton.propTypes = {
    buttonLabel: PropTypes.string,
    children: PropTypes.node,
    value: PropTypes.string.isRequired
};
DisplayButton.defaultProps = {
    buttonLabel: ""
};

export default DisplayButton;