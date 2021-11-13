import React from 'react';
import PropTypes from 'prop-types';

const DisplayButtonFunctional = ({children, clickFunction, customClass, isActive, item}) => {
    const className = customClass || 'CC-Display_Button_Functional';
    const classNameModifier = isActive ? 'active' : 'inactive';
    const { label, url } = item;
    return <div className={`${className}--container-${classNameModifier}`} onClick={clickFunction}>
        <img alt={label} className={`${className}--image`} src={url}/>
        {children}
    </div>
};
DisplayButtonFunctional.propTypes = {
    children: PropTypes.node,
    clickFunction: PropTypes.func.isRequired,
    customClass: PropTypes.string,
    isActive: PropTypes.bool,
    item: PropTypes.arrayOf({label: PropTypes.string, url: PropTypes.string}).isRequired
};
DisplayButtonFunctional.defaultProps = {
    customClass: "",
    isActive: false
};
export default DisplayButtonFunctional;