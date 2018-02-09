import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard2/dashboard2'
import BillingClycle from '../billingCycles/billingCycles'
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}> 
            <IndexRoute component={Dashboard}/>
            <Route path='billingCycles' component={BillingClycle} />
        </Route> 
        <Redirect from='*' to='/' />
    </Router> 
)
