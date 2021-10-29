import { GET_CONVERSATIONS, GET_MESSAGES, SAVE_MESSAGE } from "./types";

const INITIAL_STATE = {
  conversations: [],
  messages:[]
};

const conversationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONVERSATIONS:
      return {
        ...state,
        conversations: action.payload,
      };
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      }
    case SAVE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages,action.payload]
      }
    default:
      return state;
  }
};

export default conversationReducer;
