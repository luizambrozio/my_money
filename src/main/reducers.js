import { combineReducers } from 'redux'
import  { reducer as formReducer } from 'redux-form';
import DashboardeReducer from '../dashboard/dashboardReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'
import AuthReducer from '../auth/authReducer'

import TabRedulcer from '../common/tab/TabRedulcer';
import BillingCycleReducer from '../billingCycles/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardeReducer,
    tab: TabRedulcer,
    billingCycle : BillingCycleReducer,
    form : formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
});

export default rootReducer