import { GET_CONVERSATIONS, GET_MESSAGES, SAVE_MESSAGE } from "./types";
import axios from "axios";
import { baseUrl } from "../../constants/api";

export const getConversations = (userId, token) => async (dispatch) => {
  const path = `${baseUrl}/conversations/${userId}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.get(path, config);

    dispatch({
      type: GET_CONVERSATIONS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const getMessages = (conversationId, token) => async (dispatch) => {
 
  const path = `${baseUrl}/messages/${conversationId}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.get(path, config);

    dispatch({
      type: GET_MESSAGES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const saveMessage = (data, token) => async (dispatch) => {
 
  const path = `${baseUrl}/messages/`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.post(path,data, config);

    dispatch({
      type: SAVE_MESSAGE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};








