import axios from "axios";
import {
  LOGIN_USER,
  POST_NEW_USER,
} from './actionTypes';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

export const newUser = (input) => async dispatch => {
  try {
    const res = await axios.post('http://127.0.0.1:8000/users/signup/',input,{headers:{'Content-Type':'application/json'}});
    dispatch({
      type: POST_NEW_USER,
      payload: res.data
    });
  } catch (error) {
    console.log(error)
  }
};

export const loginUser = (input) => async dispatch => {
  try {
    const res = await axios.post('http://127.0.0.1:8000/users/login/',input,{headers:{'Content-Type':'application/json'}});
    console.log(res.data)
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
  } catch (error) {
    console.log(error)
  }
};