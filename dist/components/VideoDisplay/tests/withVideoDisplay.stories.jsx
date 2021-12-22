import React from 'react';
import { storiesOf } from '@storybook/react';
import withVideoDisplay from '../withVideoDisplay';
import "./VideoDisplay.stories.css";
import { initalVideoSetup, VideoListComponent } from '../../../utilities/tests/storybookUtilities.stories';

const ConnectedVideoList = () => withVideoDisplay(initalVideoSetup)(VideoListComponent);

storiesOf('Video Display', module).add(
    'Video Display', () => <>
            <ConnectedVideoList />
        </>
);