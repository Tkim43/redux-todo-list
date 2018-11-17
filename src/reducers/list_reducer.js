// a reducer always starts by importing a types object

import types from '../actions/type'

const DEFAULT_STATE = {
    all:[],
    single: {},

};

export default (state = DEFAULT_STATE, action) =>{
    switch(action.type){
        case types.GET_ALL_LIST_DATA:
            console.log("list reducer", action);
            return {...state, all: action.payload.data.todos};
        default:
            return state;
    }
}