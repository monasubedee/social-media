import { GET_USERINFO, USER_LOGIN, USER_REGISTER } from "./types";

const INITIAL_STATE = {
    data: null,
    userInfo:null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                data: action.payload
            }
        case USER_REGISTER:
            return{
                ...state,
                data: action.payload
            }
        case GET_USERINFO:
            return{
                ...state,
                userInfo: action.payload
            }
        default:
            return state;
    }
}


export default userReducer;