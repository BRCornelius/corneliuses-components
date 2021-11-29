import React from 'react';
import PropTypes from 'prop-types';

export const OpenCloseIcon = ({open}) => {
    const alt = open ? 'Close Button' : 'Open Button';
    const src = open ? 'https://assets.corneliuses.com/photos/common/collapse_down.png' : 'https://assets.corneliuses.com/photos/common/collapse_up.png';
    return <img alt={alt} src={src} />
};
OpenCloseIcon.propTypes = {
    open: PropTypes.bool.isRequired
};
