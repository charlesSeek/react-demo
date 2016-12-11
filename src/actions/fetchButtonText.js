export const fetchButtonText = (text,status)=>{
    return {
        type:'FETCH_BUTTON_TEXT',
        payload:{text,status}
    }
}