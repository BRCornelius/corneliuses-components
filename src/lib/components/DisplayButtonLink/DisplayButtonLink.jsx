import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DisplayButtonLink = ({children, customClass, item}) => {
    const { label, url } = item
    return <Link to={`/${url}`} className="CC-Display_Button_Link--container">
        <img alt={label} className={`${customClass}--image`} src={url}/>
        {children}
    </Link>
};

DisplayButtonLink.propTypes = {
    children: PropTypes.node,
    customClass: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string
    }))
};
DisplayButtonLink.defaultProps = {
    customClass: 'CC-Display_Button_Link'
};

export default DisplayButtonLink;