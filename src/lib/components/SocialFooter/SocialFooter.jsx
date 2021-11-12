import React from 'react';
import PropTypes from 'prop-types';

const SocialFooter = ({socialLinks, children, isCorneliuses}) => <div className="CC-Social_Footer--container">
    <div className="CC-Social_Footer--links">
        {socialLinks.map(link => <a key={link.id} class="CC-Social_Footer--link" id={link.id} href={link.path}>{link.label}</a>)}
    </div>
    <div className="CC-Social_Footer--links">
        {isCorneliuses && <a class="CC-Social_Footer--link" id="corneliuses" href="http://corneliuses.com">Family</a>}
        {children}
    </div>
</div>

SocialFooter.propTypes = {
    children: PropTypes.node,
    isCorneliuses: PropTypes.bool,
    socialLinks: PropTypes.arrayOf({id: PropTypes.string, label: PropTypes.string, path: PropTypes.string}).isRequired
}
SocialFooter.defaultProps = {
    isCorneliuses: false
}

export default SocialFooter;