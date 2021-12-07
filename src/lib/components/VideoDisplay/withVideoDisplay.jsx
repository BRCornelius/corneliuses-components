import React, { useState } from 'react';
import PropTypes from 'prop-types';

const withVideoDisplay = ({customClass, initialVideoSource}) => ListComponent => {
    const [activeVideo, setActiveVideo] = useState(initialVideoSource)
    return <div className={`${customClass}--container`}>
        { activeVideo && <video className={`${customClass}--video`} src={activeVideo} /> }
        <ListComponent clickFunction={setActiveVideo} />
    </div>;
};
withVideoDisplay.propTypes = {
    customClass: PropTypes.string,
    initialVideoSource: PropTypes.string,
    ListComponent: PropTypes.elementType.isRequired
};
withVideoDisplay.defaultProps = {
    customClass: 'CC-Video_Display',
    initialVideoSource: ''
};

export default withVideoDisplay;
