import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isMobile, useOutsideClick } from '../../utilities';

const NavigationHeader = ({icon, logo, links}) => {
    const [open, setOpen] =useState(false)
    const toggleNav = () => setOpen(!open)
    const wrapperRef = useRef(null)


    useOutsideClick(wrapperRef, toggleNav)

    return isMobile
        ? <>
            <div className="CC-Navigation-Header--top_bar">
                <img alt="logo" className="CC-Navigation-Header--logo" src={logo} />
            </div>
            <div className={open ? "CC-Navigation-Header--hamburger_open" : "CC-Navigation-Header--hamburger_menu"}>
                {!open && <img alt="menu" className="CC-Navigation-Header--hamburger_icon" src={icon} onClick={toggleNav}/>}
                {open && <div className="CC-Navigation-Header--links-menu" ref={wrapperRef}>
                    {links.map(link => <Link to={`/${link.path}`} className="CC-Navigation-Header--nav-link" onClick={toggleNav}>{link.label}</Link>)}
                </div>}
            </div>
        </>
        : <div className="CC-Navigation-Header--nav_menu">
            <img alt="logo" className="CC-Navigation-Header--logo" src={logo} />
            <nav className="CC-Navigation-Header--nav-link-container">
                {links.map(link => <Link to={`/${link.path}`} className="CC-Navigation-Header--nav-link">{link.label}</Link>)}
            </nav>
        </div>
}

NavigationHeader.propTypes = {
    icon: PropTypes.string,
    logo: PropTypes.string,
    links: PropTypes.arrayOf({}).isRequired,
}
NavigationHeader.defaultProps = {
    icon: "https://img.icons8.com/material-outlined/24/000000/menu--v1.png",
    logo: ""
}

export default NavigationHeader;