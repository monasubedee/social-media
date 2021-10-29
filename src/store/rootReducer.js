import { combineReducers } from "redux";
import conversationReducer from "./conversation/reducers";
import homeReducer from "./home/reducers";
import userReducer from "./user/reducers";




const rootReducer = combineReducers({
    user: userReducer,
    home: homeReducer,
    conversations: conversationReducer
});


export default rootReducer;