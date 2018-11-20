import types from './type'
import axios from 'axios'

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=tiffanydestroystheworld';
// axios is a library to access stuff
// async await does exactly what .then does but in a linear fashion
// axios returns a promise
// .then is just the way promises used to be built


// an action must have a type property and must return an object
// goal make an asynchronous call
export function getListData(){

    const resp = axios.get(BASE_URL + API_KEY);
    return {
        type: types.GET_ALL_LIST_DATA,
        payload: resp
    }
}

export function addToDoItem(item){
    const resp = axios.post(BASE_URL + API_KEY,item);

    return{
        type: types.ADD_LIST_ITEM,
        payload: resp
    }
}





