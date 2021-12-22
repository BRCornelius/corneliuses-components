import React from 'react';
import { storiesOf } from '@storybook/react';
import Drawer from '../Drawer';
import { ChildComponent } from '../../../utilities/tests/storybookUtilities.stories.jsx';
import "./Drawer.stories.css";

storiesOf('Drawer', module).add(
    'Drawer', () => {
        const props = {
            imageUrl: 'http://boletimnerd.com.br/wp-content/uploads/2017/02/Legion-Conhe%C3%A7a-os-quadrinhos-do-mutante-David-Haller-o-Legi%C3%A3o-3.jpg',
            label: 'Legion'
        }
        return <Drawer {...props}>
            <ChildComponent />
        </Drawer>
    }
);