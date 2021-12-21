import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Interstitial from '../Interstitial';
import "./Interstitial.stories.css";

storiesOf('Interstitial', module).add(
    'Interstitial', () => {
        const [open, setOpen] = useState(false)
        const close = () => {
            setOpen(false)
        }
        const clickFunction = () => {
            setOpen(true)
            setTimeout(close, 3000)
        }
        return <>
            <button onClick={clickFunction}>Click Me</button>
            {open ? 'Open' : 'Closed'}
            <Interstitial condition={open} />
        </>;
    }
);