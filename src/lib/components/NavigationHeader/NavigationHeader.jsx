import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isMobile, useOutsideClick } from '../../utilities';

const NavigationHeader = ({customClass, icon, logo, links}) => {
    const [open, setOpen] =useState(false)
    const toggleNav = () => setOpen(!open)
    const wrapperRef = useRef(null)

    useOutsideClick(wrapperRef, toggleNav)

    return isMobile
        ? <>
            <div className={`${customClass}--top_bar`}>
                <img alt="logo" className={`${customClass}--logo`} src={logo} />
            </div>
            <div className={open ? `${customClass}--hamburger_open` : `${customClass}--hamburger_menu`}>
                {!open && <img alt="menu" className={`${customClass}--hamburger_icon`} src={icon} onClick={toggleNav}/>}
                {open && <div className={`${customClass}--links-menu`} ref={wrapperRef}>
                    {links.map(link => <Link to={`/${link.path}`} className={`${customClass}--nav-link`} onClick={toggleNav}>{link.label}</Link>)}
                </div>}
            </div>
        </>
        : <div className={`${customClass}--nav_menu`}>
            <img alt="logo" className={`${customClass}--logo`} src={logo} />
            <nav className={`${customClass}--nav-link-container`}>
                {links.map(link => <Link to={`/${link.path}`} className={`${customClass}--nav-link`}>{link.label}</Link>)}
            </nav>
        </div>
};
NavigationHeader.propTypes = {
    customClass: PropTypes.string,
    icon: PropTypes.string,
    logo: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        path: PropTypes.string
    })).isRequired,
};
NavigationHeader.defaultProps = {
    customClass: 'CC-Navigation-Header',
    icon: "https://img.icons8.com/material-outlined/24/000000/menu--v1.png",
    logo: ""
};
export default NavigationHeader;
