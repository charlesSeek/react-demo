const INITIAL_STATE = {
    user:{}
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'USER_POST_SUCCESS':
            const user = action.payload;
            return {...state,user}
        case 'USER_POST_FAILED':
            return {};
        default:
            return state;
    }
}