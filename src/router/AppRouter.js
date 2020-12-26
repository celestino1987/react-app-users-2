import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { TableCreate } from '../components/TableCreate';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={TableCreate} />
                   
                   
                </Switch>
            </div>
        </Router>
    )
}
