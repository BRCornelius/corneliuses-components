import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isMobile, useOutsideClick } from '../../utilities';

const NavigationHeader = ({customClass, icon, logo, links}) => {
    const [open, setOpen] =useState(false)
    const toggleNav = () => setOpen(!open)
    const wrapperRef = useRef(null)
    const className = customClass || 'CC-Navigation-Header';

    useOutsideClick(wrapperRef, toggleNav)

    return isMobile
        ? <>
            <div className={`${className}--top_bar`}>
                <img alt="logo" className={`${className}--logo`} src={logo} />
            </div>
            <div className={open ? `${className}--hamburger_open` : `${className}--hamburger_menu`}>
                {!open && <img alt="menu" className={`${className}--hamburger_icon`} src={icon} onClick={toggleNav}/>}
                {open && <div className={`${className}--links-menu`} ref={wrapperRef}>
                    {links.map(link => <Link to={`/${link.path}`} className={`${className}--nav-link`} onClick={toggleNav}>{link.label}</Link>)}
                </div>}
            </div>
        </>
        : <div className={`${className}--nav_menu`}>
            <img alt="logo" className={`${className}--logo`} src={logo} />
            <nav className={`${className}--nav-link-container`}>
                {links.map(link => <Link to={`/${link.path}`} className={`${className}--nav-link`}>{link.label}</Link>)}
            </nav>
        </div>
}

NavigationHeader.propTypes = {
    customClass: PropTypes.string,
    icon: PropTypes.string,
    logo: PropTypes.string,
    links: PropTypes.arrayOf({}).isRequired,
}
NavigationHeader.defaultProps = {
    customClass: "",
    icon: "https://img.icons8.com/material-outlined/24/000000/menu--v1.png",
    logo: ""
}

export default NavigationHeader;