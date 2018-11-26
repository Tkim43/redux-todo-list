export default (store) => (next) => async (action) =>{
    //we want to write a piece of middleware to see if it has a payload or promise
    if(!action.payload || !action.payload.then){
        // if there isn't a payload property or isn't a promise
        // go onto the next thing and move on 
        return next(action);
    }
    // has a promise on the payload property

    // we want to resolve our promise so we use this
    // action.payload.then((resp)=>{
    //     const resp = await action.payload
    //     const newAction = {
    //         ...action,
    //         payload: resp,
    //     }
    //     // dispatch takes an action and sends it to the middleware which then goes to the reducer
    //     store.dispatch(newAction);
    // });
    const resp = await action.payload;
    const newAction = {
                ...action,
                payload: resp,
            }
    // return action.payload;
    store.dispatch(newAction);
    return resp;
}

// if you want to write your own middle ware
// export default function(store){
//     return function(next){
//         return function(action){
//             // code goes here
//         }
//     }
// }