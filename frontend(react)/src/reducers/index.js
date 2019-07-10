import {combineReducers} from 'redux'
import todoReducer from './todoReducer'

const shopApp = combineReducers(
    {
        todoReducer
    }
)

export default shopApp