import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

const Router = ({routes}) => <Switch>
    {routes.map(route => {
        const {path, view: View} = route;
        return <Route path={`/${path}`}>
            <View />
        </Route>
    })}
</Switch>;
Router.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string,
        view: PropTypes.elementType
    })).isRequired
};
export default Router;