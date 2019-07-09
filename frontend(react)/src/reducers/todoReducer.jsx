import {combineReducers} from 'redux'

const todos = (state = {list : []}, action) =>{
    switch(action.type){
        case ADD_TODO :
            console.log('ADD_TODO')
        default : 
        return state
    }
    return state
}

export default todos;