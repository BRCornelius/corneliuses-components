import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OpenCloseIcon } from '../../utilities';

const Drawer = ({
    children,
    customClass,
    imageUrl,
    label,
    closeIcon,
    openIcon
}) => {
    const [open, setOpen] = useState(false);
    const className = customClass || 'CC-Drawer';
    let src = open ? 'https://assets.corneliuses.com/photos/common/collapse_up.png' : 'https://assets.corneliuses.com/photos/common/collapse_down.png';
    const icon = <img alt={label} className={`${className}--icon`} src={src} />;
    const expandIcon = openIcon || icon;
    const collapseIcon = closeIcon || icon;
    const openCloseIcon = open ? expandIcon : collapseIcon;
    return <div className={`${className}--display_container`}>
        <div className={`${className}--label_container`} onClick={() => setOpen(!open)} >
            {imageUrl && <img alt={label} className={`${className}--label_image`} src={imageUrl} />}
            {label}
            {openCloseIcon}
        </div>
        {open && <div className={`${className}--expanded_container`}>
            {children}
        </div>}
    </div>
};
Drawer.propTypes = {
    children: PropTypes.node,
    customClass: PropTypes.string,
    imageUrl: PropTypes.string,
    label: PropTypes.string.isRequired,
    CloseIcon: PropTypes.node,
    OpenIcon: PropTypes.node
};
Drawer.defaultProps = {
    customClass: "",
    imageUrl: "",
    CloseIcon: OpenCloseIcon,
    OpenIcon: OpenCloseIcon
};
export default Drawer;
