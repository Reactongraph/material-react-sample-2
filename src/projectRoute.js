import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Home from './container/Home';

// Switch between one screen to another screen

const history = createHistory()

const ProjectRoutes = (props) => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={props => <Home {...props} hi="hello" />}
                />

            </Switch>
        </Router>
    )
}

export default ProjectRoutes;
