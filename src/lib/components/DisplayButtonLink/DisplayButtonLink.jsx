import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DisplayButtonLink = ({buttonLabel, children, customClass, value}) => <Link to={`/${value}`} className="CC-Display_Button_Link--container">
    {children}
    <button className={`${customClass || 'CC-Display_Button_Link'}--button`}>
        {buttonLabel}
    </button>
</Link>;

DisplayButtonLink.propTypes = {
    buttonLabel: PropTypes.string,
    children: PropTypes.node,
    customClass: PropTypes.string,
    value: PropTypes.string.isRequired
};
DisplayButtonLink.defaultProps = {
    buttonLabel: "",
    customClass: ""
};

export default DisplayButtonLink;