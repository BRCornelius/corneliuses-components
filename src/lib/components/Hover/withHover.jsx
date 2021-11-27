import React, { useState } from 'react';
import { useMousePosition } from '../../utilities/browserUtilities';

const withHover = ({customClass}) => HoverComponent => DisplayComponent => {
    const [open, setOpen] = useState(false);
    const position = useMousePosition();
    const hoverStyle = {
      position: "absolute",
      zIndex: 999999,
      top: position.y + 20,
      left: position.x + 20,
      overflow: "wrap"
    };
    const className = customClass || 'CC-Hover';

    return (
      <>
        <div
          className={`${className}--display`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <DisplayComponent />
        </div>
        {open && (
          <div className={`${className}--modal`} id="hover-modal" style={hoverStyle}>
            <HoverComponent />
          </div>
        )}
      </>
    );
};

export default withHover;