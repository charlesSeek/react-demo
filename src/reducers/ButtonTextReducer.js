const INITIAL_STATE = {
    text:'Send',
    status:''
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'FETCH_BUTTON_TEXT':
            const { text,status } = action.payload;
            return {...state,text,status}
        default:
            return state;
    }
}