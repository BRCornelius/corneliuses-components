import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OpenCloseIcon } from '../../utilities';

const Drawer = ({
    children,
    customClass,
    imageUrl,
    label,
    CloseIcon,
    OpenIcon
}) => {
    const [open, setOpen] = useState(false);
    const className = customClass || 'CC-Drawer';
    let ExpandIcon = open ? OpenIcon : CloseIcon;
    return <>
        <div className={`${className}--label_container`}>
            {imageUrl && <img alt={label} className={`${className}--label_image`} src={imageUrl} />}
            {label}
            <ExpandIcon className={`${className}--expand_icon`} onClick={() => setOpen(!open)} open={open} />
        </div>
        <div className={`${className}--expanded_container`}>
            {children}
        </div>
    </>
};
Drawer.propTypes = {
    children: PropTypes.node,
    customClass: PropTypes.string,
    imageUrl: PropTypes.string,
    label: PropTypes.string.isRequired,
    CloseIcon: PropTypes.elementType,
    OpenIcon: PropTypes.elementType
};
Drawer.defaultProps = {
    customClass: "",
    imageUrl: "",
    CloseIcon: OpenCloseIcon,
    OpenIcon: OpenCloseIcon
};
export default Drawer;
