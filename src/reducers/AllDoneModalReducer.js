const INITIAL_STATE = {
    isShowAllDonesModal:false
}
export default (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'DISPLAY_ALLDONE_MODAL':
            return {...state,isShowAllDoneModal:true}
        case 'HIDDEN_ALLDONE_MODAL':
            return {...state,isShowAllDoneModal:false}
        default:
            return state;
    }
}