import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';

const Contact = ({buttonLabel, customClass, handleTextSubmit, handleEmailSubmit}) => {
    const [open, setOpen] = useState(false);
    const [method, setMethod] = useState('email');
    const className = customClass || 'CC-Contact';
    const isMethodActive = selectedMethod => selectedMethod === method ? `${className}--method_active` : `${className}--method_inactive`;
    const handleSubmit = method === 'email' ? handleEmailSubmit : handleTextSubmit;

    return <>
        {open & <div className={`${className}--modal`}>
            <div className={`${className}--methods`}>
                <button className={isMethodActive('email')} onClick={() => setMethod('email')}>Email</button>
                <button className={isMethodActive('text')} onClick={() => setMethod('text')}>Text</button>
                <ContactForm handleSubmit={handleSubmit} />
            </div>
        </div>}
        <button className={`${className}--button`} onClick={() => setOpen(!open)}>{buttonLabel}</button>
    </>
};
Contact.propTypes = {
    buttonLabel: PropTypes.string,
    customClass: PropTypes.string,
    handleEmailSubmit: PropTypes.func.isRequired,
    handleTextSubmit: PropTypes.func.isRequired
};
Contact.defaultProps = {
    buttonLabel: 'Contact Me',
    customClass: ""
};

export default Contact;