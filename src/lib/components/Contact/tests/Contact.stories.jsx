import React from 'react';
import { storiesOf } from '@storybook/react';
import Contact from '../Contact';
import "./Contact.stories.css"

storiesOf('Contact Components', module)
    .add(
    'Contact Component', () => {
        const props = {
            buttonLabel: 'Button Label',
            handleEmailSubmit: () => window.alert('Email Submitted'),
            handleTextSubmit: () => window.alert('Text Submitted')
        }
        return <Contact {...props} />
    });
