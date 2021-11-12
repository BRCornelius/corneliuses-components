import React from 'react';

const SocialFooter = ({socialLinks, displayContact, isCorneliuses}) => <div className="CC-Social_Footer--container">
    <div className="CC-Social_Footer--links">
        {socialLinks.map(link => <a key={link.id} class="CC-Social_Footer--link" id={link.id} href={link.path}>{link.label}</a>)}
    </div>
    {isCorneliuses && <div className="CC-Social_Footer--links">
        <a class="CC-Social_Footer--link" id="corneliuses" href="http://corneliuses.com">Family</a>
        {displayContact && <>CONTACT_COMPONENT</>}
    </div>}
</div>

export default SocialFooter;