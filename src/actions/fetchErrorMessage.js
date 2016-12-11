export const fetchErrorMessage = (message)=>{
    return {
        type:'FETCH_ERROR_MESSAGE',
        payload:message
    }
}