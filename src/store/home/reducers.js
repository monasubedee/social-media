import { GET_TIMELINE_POSTS, CREATE_POST, LIKE_UNLIKE_POST } from "./types";

const INITIAL_STATE = {
  posts: [],
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TIMELINE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts,action.payload],
      };
    case LIKE_UNLIKE_POST:
      return {
        ...state,
        posts: [...state.posts],
      };
    default:
      return state;
  }
};

export default homeReducer;
