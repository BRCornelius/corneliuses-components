import React from 'react';
import PropTypes from 'prop-types';

const SocialFooter = ({customClass, socialLinks, children, isCorneliuses}) => <div className={`${customClass}--container`}>
    <div className={`${customClass}--links_primary`}>
        {socialLinks.map(link => <a key={link.id} class={`${customClass}--link`} id={link.id} href={link.path}>{link.label}</a>)}
    </div>
    <div className={`${customClass}--links_secondary`}>
        {isCorneliuses && <a class={`${customClass}--link`} id="corneliuses" href="http://corneliuses.com">Family</a>}
        {children}
    </div>
</div>;
SocialFooter.propTypes = {
    children: PropTypes.node,
    customClass: PropTypes.string,
    isCorneliuses: PropTypes.bool,
    socialLinks: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string, label: PropTypes.string, path: PropTypes.string})).isRequired
}
SocialFooter.defaultProps = {
    customClass: 'CC-Social_Footer',
    isCorneliuses: false
}

export default SocialFooter;