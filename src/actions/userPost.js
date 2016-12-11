import axios from 'axios';
export const userPost = (user) =>{
    const url = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";
    return (dispatch)=>{
        console.log('user:',user)
        axios.post(url,user)
            .then((response)=>{
                if (response.status==200){
                    dispatch({type:'USER_POST_SUCCESS',payload:user});
                    dispatch({type:'FETCH_BUTTON_TEXT',payload:{text:'Send',status:''}})
                    dispatch({type:'HIDDEN_REQUEST_MODAL'});
                    dispatch({type:'DISPLAY_ALLDONE_MODAL'})
                }else{
                    dispatch({type:'USER_POST_FAILED'})
                    dispatch({type:'FETCH_ERROR_MESSAGE',payload:response.errorMessage});
                    dispatch({type:'FETCH_BUTTON_TEXT',payload:{text:'Send',status:''}});
                }
            })
            .catch((error)=>{
                dispatch({type:'USER_POST_FAILED'})
                dispatch({type:'FETCH_ERROR_MESSAGE',payload:error.toString()});
                dispatch({type:'FETCH_BUTTON_TEXT',payload:{text:'Send',status:''}});
            })
    }
}