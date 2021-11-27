import React from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({customClass, handleSubmit}) => {

    const submitValues = e => {
        e.preventDefault();
        const {
            firstName: { value: firstName },
            lastName: { value: lastName },
            email: { value: email },
            phone: { value: phone },
            message: { value: message }
        } = e.target;
        handleSubmit({firstName,lastName,email,phone,message});
    };

    const className = customClass || 'CC-Contact_Form';

    return <form className={`${className}--form`} onSubmit={submitValues}>
        <div className={`${className}--names`}>
            <input className={`${className}--input`} type="text" placeholder="First Name" name="firstName" />
            <input className={`${className}--input`} type="text" placeholder="Last Name" name="lastName" />
        </div>
        <div className={`${className}--contacts`}>
            <input className={`${className}--input`} type="email" placeholder="Email" name="email" />
            <input className={`${className}--input`} type="phone" placeholder="Phone Number" name="phone" />
        </div>
        <textarea className={`${className}--message`} placeholder="Enter your message and I will get back to you as soon as possible" name="message" />
        <input className={`${className}--submit`} />
    </form>
}

ContactForm.propTypes = { 
    handleSubmit: PropTypes.func.isRequired,
    customClass: PropTypes.string
};
ContactForm.defaultProps = {
    customClass: ""
};

export default ContactForm;