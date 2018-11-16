// a reducer always starts by importing a types object

import types from '../actions/type'

const DEFAULT_STATE = {
    all:[],
    single: {},

};

export default (state = DEFAULT_STATE, action) =>{
    switch(action.type){
        default:
            return state;
    }
}