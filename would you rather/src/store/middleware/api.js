import axios from "axios";
import * as actions from "../api";

const api = ({dispatch}) => next => async action => {
    
    if(action.type !== actions.apiCallBegan.type){
        return next(action);
    }   

    const {url, method, data, onStart, onSuccess, OnError} = action.payload;

    if(onStart)
    dispatch({type : onStart})


    next(action);

    try {        
    const response = await axios.request({
        baseURL : "http://localhost:8000",
        url,
        method,
        data,
    });

    if(onSuccess) dispatch({type : onSuccess, payload: response.data});
    else dispatch(actions.apiCallSuccess(response.data));
    
}catch(e) {       
    if(OnError) dispatch({type : OnError, payload: e});
    else  dispatch(actions.apiCallFailed(e));
}
};


export default api;