import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialFooter from '../SocialFooter';
import "./SocialFooter.stories.css";
import { ChildComponent } from '../../../utilities/tests/storybookUtilities.stories';

storiesOf('SocialFooter', module).add(
    'SocialFooter', () => <>
            <ChildComponent />
            <SocialFooter />
        </>
);