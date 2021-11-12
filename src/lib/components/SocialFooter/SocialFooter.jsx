import React from 'react';
import PropTypes from 'prop-types';

const SocialFooter = ({socialLinks, displayContact, isCorneliuses}) => <div className="CC-Social_Footer--container">
    <div className="CC-Social_Footer--links">
        {socialLinks.map(link => <a key={link.id} class="CC-Social_Footer--link" id={link.id} href={link.path}>{link.label}</a>)}
    </div>
    {isCorneliuses && <div className="CC-Social_Footer--links">
        <a class="CC-Social_Footer--link" id="corneliuses" href="http://corneliuses.com">Family</a>
        {displayContact && <>CONTACT_COMPONENT</>}
    </div>}
</div>

SocialFooter.propTypes = {
    displayContact: PropTypes.bool,
    isCorneliuses: PropTypes.bool,
    socialLinks: PropTypes.arrayOf({id: PropTypes.string, label: PropTypes.string, path: PropTypes.string}).isRequired
}
SocialFooter.defaultProps = {
    displayContact: false,
    isCorneliuses: false
}

export default SocialFooter;