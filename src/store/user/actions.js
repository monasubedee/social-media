import { GET_USERINFO, USER_LOGIN, USER_REGISTER } from "./types";
import axios from "axios";
import { baseUrl } from "../../constants/api";
import { setUserInfo } from "../../localstorage/localstorage";



export const userLogin = (data,history) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/signin`, data);
    if(response.status === 200){
      setUserInfo(response.data);
      history.push('/');
    }
    dispatch({
      type: USER_LOGIN,
      payload: response.data
    });

  } catch (error) {
    console.log(error);
  }
};


export const userRegister = (data,history) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/signup`,data);
    if(response.status === 200){
      setUserInfo(response.data);
      history.push('/');
    }
    dispatch({
      type: USER_REGISTER,
      payload: response.data
    })
  } catch (error) {
    console.log(error);
  }
}


export const  getUserInformation = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userId}`);
  
    dispatch({
      type: GET_USERINFO,
      payload: response.data
    })
  } catch (error) {
    console.log(error);
  }
}