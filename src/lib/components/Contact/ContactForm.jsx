import React from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({handleSubmit}) => {

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
    }

    return <form className="CC-Contact_Form--form" onSubmit={submitValues}>
        <div className="CC-Contact_Form--names">
            <input className="CC-Contact_Form--input" type="text" placeholder="First Name" name="firstName" />
            <input className="CC-Contact_Form--input" type="text" placeholder="Last Name" name="lastName" />
        </div>
        <div className="CC-Contact_Form--contacts">
            <input className="CC-Contact_Form--input" type="email" placeholder="Email" name="email" />
            <input className="CC-Contact_Form--input" type="phone" placeholder="Phone Number" name="phone" />
        </div>
        <textarea className="CC-Contact_Form--message" placeholder="Enter your message and I will get back to you as soon as possible" name="message" />
        <input className="CC-Contact_Form--submit" />
    </form>
}

ContactForm.propTypes = { handleSubmit: PropTypes.func.isRequired };

export default ContactForm;