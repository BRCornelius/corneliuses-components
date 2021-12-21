import { storiesOf } from '@storybook/react';
import withHover from '../withHover';
import { ChildComponent } from '../../../utilities/tests/storybookUtilities.stories.jsx';
import "./Hover.stories.css";

const BasicText = () => <div className="mock-overlay">This is Working Properly!</div>;

storiesOf('Hover', module).add(
    'with Hover', () => {
        return withHover({})(BasicText)(ChildComponent);
    }
);