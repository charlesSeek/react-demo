const INITIAL_STATE = {
    message:''
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'FETCH_ERROR_MESSAGE':
            return {...state,message:action.payload}
        default:
            return state;
    }
}