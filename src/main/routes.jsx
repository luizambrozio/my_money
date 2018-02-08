import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard2/dashboard2'
import BillingClycle from '../billingCycles/billingCycles'
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp} />
        <Route path='billingCycles' component={BillingClycle} />
        <Redirect from='*' to='/' />
    </Router> 
)
