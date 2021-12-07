import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

    return (
      <>
        <div
          className={`${customClass}--display`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <DisplayComponent />
        </div>
        {open && (
          <div className={`${customClass}--modal`} id="hover-modal" style={hoverStyle}>
            <HoverComponent />
          </div>
        )}
      </>
    );
};
withHover.propTypes = {
  customClass: PropTypes.string
};
withHover.defaultProps = {
  customClass: 'CC-Hover'
};

export default withHover;