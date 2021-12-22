import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialFooter from '../SocialFooter';
import "./SocialFooter.stories.css";
import { ChildComponent, socialLinks } from '../../../utilities/tests/storybookUtilities.stories';

storiesOf('Social Footer', module).add(
    'Social Footer', () => <>
            <ChildComponent />
            <SocialFooter socialLinks={socialLinks} isCorneliuses />
        </>
);