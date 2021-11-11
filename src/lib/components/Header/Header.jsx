import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile, useOutsideClick } from '../../utilities';

const Header = ({icon, companyLogo, links}) => {
    const [open, setOpen] =useState(false)
    const toggleNav = () => setOpen(!open)
    const wrapperRef = useRef(null)

    const iconURL = icon || "https://img.icons8.com/material-outlined/24/000000/menu--v1.png";

    useOutsideClick(wrapperRef, toggleNav)

    return isMobile
        ? <>
            <div className="CC-Header--top_bar">
                <img alt="logo" className="CC-Header--logo" src={companyLogo} />
            </div>
            <div className={open ? "CC-Header--hamburger_open" : "CC-Header--hamburger_menu"}>
                {!open && <img alt="menu" className="CC-Header--hamburger_icon" src={iconURL} onClick={toggleNav}/>}
                {open && <div className="CC-Header--links-menu" ref={wrapperRef}>
                    {links.map(link => <Link to={`/${link.path}`} className="CC-Header--nav-link" onClick={toggleNav}>{link.label}</Link>)}
                </div>}
            </div>
        </>
        : <div className="nav-menu">
            <img alt="logo" className="CC-Header--logo" src={companyLogo} />
            <nav className="CC-Header--nav-link-container">
                {links.map(link => <Link to={`/${link.path}`} className="CC-Header--nav-link">{link.label}</Link>)}
            </nav>
        </div>
}

export default Header;