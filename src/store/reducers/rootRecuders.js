import projectReducers from './projectReducers'
import authReducers from './authReducers'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    auth: authReducers,
    project: projectReducers
});

export default rootReducers;