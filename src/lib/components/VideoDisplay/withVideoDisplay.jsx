import React, { useState } from 'react';

const withVideoDisplay = ({customClass, initialVideoSource}) => ListComponent => {
    const styleClass = customClass || 'CC-Video_Display';
    const initialSource = initialVideoSource || '';
    const [activeVideo, setActiveVideo] = useState(initialSource)
    return <div className={`${styleClass}--container`}>
        { activeVideo && <video className={`${styleClass}--video`} src={activeVideo} controls /> }
        <ListComponent clickFunction={setActiveVideo} />
    </div>;
};

export default withVideoDisplay;
