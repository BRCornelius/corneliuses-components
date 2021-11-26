import React, { useState } from 'react';

const withVideoDisplay = ({customClass, initialVideoSource}) => ListComponent => {
    const [activeVideo, setActiveVideo] = useState(initialVideoSource)
    const className = customClass || 'CC-Video_Display';
    return <div className={`${className}--container`}>
        <video className={`${className}--video`} src={activeVideo} />
        <ListComponent clickFunction={setActiveVideo} />
    </div>;
};

export default withVideoDisplay;
