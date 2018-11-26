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

export function getSingleItem(id){
    // url is different because we have to add in our item_id
    // const resp = axios.get('http://api.reactprototypes.com/todos/${id}?key=tiffanydestroystheworld)
    const resp = axios.get(`${BASE_URL}/${id + API_KEY}`)
    // you need to dispatch the object
    return{
        type: types.GET_SINGLE_ITEM,
        payload: resp
    }
}





