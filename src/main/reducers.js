import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    deshboard: () => ({summary: {credit: 100, debitt: 50}})
})

export default rootReducer