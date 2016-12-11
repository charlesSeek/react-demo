const INITIAL_STATE = {
    isShowRequestModal:false
}
export default (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'DISPLAY_REQUEST_MODAL':
            return {...state,isShowRequestModal:true}
        case 'HIDDEN_REQUEST_MODAL':
            return {...state,isShowRequestModal:false}
        default:
            return state;
    }
}