import { combineReducers } from 'redux'
import DashboardeReducer from '../dashboard/dashboardReducer'
import TabRedulcer from '../common/tab/TabRedulcer';

const rootReducer = combineReducers({
    dashboard: DashboardeReducer,
    tab: TabRedulcer
})

export default rootReducer