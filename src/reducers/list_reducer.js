// a reducer always starts by importing a types object

import types from '../actions/type'

const DEFAULT_STATE = {
    all:[],
    single: {},

};

export default (state = DEFAULT_STATE, action) =>{
    switch(action.type){
        case types.GET_ALL_LIST_DATA:
        console.log("get list data in reducer", action.payload)
            return {...state, all: action.payload.data.todos};
        case types.GET_SINGLE_ITEM:
            return {...state,single: action.payload.data.todo};    
        default:
            return state;
    }
}