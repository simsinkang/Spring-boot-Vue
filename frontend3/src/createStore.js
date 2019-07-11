import {createStore as reduxCtreateStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import * as reducers from './reducers'
import thunk from 'redux-thunk'

export default function createStore(history){
    return reduxCtreateStore(
        combineReducers({
            ...reducers,
            router : connectRouter(history)
        }),
        
        applyMiddleware(
            logger,
            thunk,
            routerMiddleware(history)
        )
    )
}
