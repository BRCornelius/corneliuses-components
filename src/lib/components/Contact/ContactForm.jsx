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

    return <form className={`${customClass}--form`} onSubmit={submitValues}>
        <div className={`${customClass}--names`}>
            <input className={`${customClass}--input`} type="text" placeholder="First Name" name="firstName" />
            <input className={`${customClass}--input`} type="text" placeholder="Last Name" name="lastName" />
        </div>
        <div className={`${customClass}--contacts`}>
            <input className={`${customClass}--input`} type="email" placeholder="Email" name="email" />
            <input className={`${customClass}--input`} type="phone" placeholder="Phone Number" name="phone" />
        </div>
        <textarea className={`${customClass}--message`} placeholder="Enter your message and I will get back to you as soon as possible" name="message" />
        <input className={`${customClass}--submit`} />
    </form>
}

ContactForm.propTypes = { 
    handleSubmit: PropTypes.func.isRequired,
    customClass: PropTypes.string
};
ContactForm.defaultProps = {
    customClass: 'CC-Contact_Form'
};

export default ContactForm;