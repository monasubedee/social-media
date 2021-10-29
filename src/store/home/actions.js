import { CREATE_POST, GET_TIMELINE_POSTS, LIKE_UNLIKE_POST } from "./types";
import axios from "axios";
import { baseUrl } from "../../constants/api";

export const getTimelinePosts = (userId, token) => async (dispatch) => {
  const path = `${baseUrl}/posts/timeline/all/${userId}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.get(path, config);

    dispatch({
      type: GET_TIMELINE_POSTS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (posts, token) => async (dispatch) => {
  const path = `${baseUrl}/posts/`;
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.post(path, posts, config);

    dispatch({
      type: CREATE_POST,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (userId, postId, token) => async (dispatch) => {

  const data = {
   userId
  }
  const path = `${baseUrl}/posts/like/${postId}`;
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.put(path, data , config);

    dispatch({
      type: LIKE_UNLIKE_POST,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
