import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DisplayButtonLink = ({buttonLabel,children,value}) => <Link to={`/${value}`} className="CC-Display_Button--container">
    {children}
    <button className="CC-Display_Button--button">
        {buttonLabel}
    </button>
</Link>;

DisplayButtonLink.propTypes = {
    buttonLabel: PropTypes.string,
    children: PropTypes.node,
    value: PropTypes.string.isRequired
};
DisplayButtonLink.defaultProps = {
    buttonLabel: ""
};

export default DisplayButtonLink;