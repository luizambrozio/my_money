import { combineReducers } from 'redux'
import DashboardeReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardeReducer
})

export default rootReducer