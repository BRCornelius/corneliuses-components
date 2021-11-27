import React from 'react';
import PropTypes from 'prop-types';

const SocialFooter = ({customClass, socialLinks, children, isCorneliuses}) => {
    const className = customClass || 'CC-Social_Footer';
    return <div className={`${className}--container`}>
        <div className={`${className}--links_primary`}>
            {socialLinks.map(link => <a key={link.id} class={`${className}--link`} id={link.id} href={link.path}>{link.label}</a>)}
        </div>
        <div className={`${className}--links_secondary`}>
            {isCorneliuses && <a class={`${className}--link`} id="corneliuses" href="http://corneliuses.com">Family</a>}
            {children}
        </div>
    </div>
};

SocialFooter.propTypes = {
    children: PropTypes.node,
    isCorneliuses: PropTypes.bool,
    socialLinks: PropTypes.arrayOf({id: PropTypes.string, label: PropTypes.string, path: PropTypes.string}).isRequired
}
SocialFooter.defaultProps = {
    isCorneliuses: false
}

export default SocialFooter;