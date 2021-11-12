import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';

const Contact = ({buttonLabel, handleTextSubmit, handleEmailSubmit}) => {
    const [open, setOpen] = useState(false);
    const [method, setMethod] = useState("email");
    const isMethodActive = selectedMethod => selectedMethod === method ? "CC-Contact--method_active" : "CC-Contact--method_inactive";
    const handleSubmit = method === 'email' ? handleEmailSubmit : handleTextSubmit;

    return <>
        {open & <div className="CC-Contact--modal">
            <div className="CC-Contact--methods">
                <button className={isMethodActive('email')} onClick={() => setMethod('email')}>Email</button>
                <button className={isMethodActive('text')} onClick={() => setMethod('text')}>Text</button>
                <ContactForm handleSubmit={handleSubmit} />
            </div>
        </div>}
        <button className="CC-Contact--button" onClick={() => setOpen(!open)}>{buttonLabel}</button>
    </>
};
Contact.propTypes = {
    buttonLabel: PropTypes.string,
    handleEmailSubmit: PropTypes.func.isRequired,
    handleTextSubmit: PropTypes.func.isRequired
};
Contact.defaultProps = {
    buttonLabel: "Contact Me"
};

export default Contact;