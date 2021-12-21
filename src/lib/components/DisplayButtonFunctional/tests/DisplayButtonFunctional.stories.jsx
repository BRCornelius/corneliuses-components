import React from 'react';
import { storiesOf } from '@storybook/react';
import DisplayButtonFunctional from '../DisplayButtonFunctional';
import { ChildComponent } from '../../../utilities/tests/storybookUtilities.stories.jsx';
import "./DisplayButtonFunctional.stories.css";

storiesOf('Display Buttons', module).add(
    'Functional Display Button', () => {
        const item = {
            label: 'X Men',
            url: 'https://freepngimg.com/download/xmen/26266-8-x-men-clipart.png'
        };
        const clickFunction = () => window.alert(`You clicked on: ${item}`)
        const props = {
            clickFunction,
            item,
            isActive: false
        }
        return <DisplayButtonFunctional {...props}>
            <ChildComponent />
        </DisplayButtonFunctional>
    }
)