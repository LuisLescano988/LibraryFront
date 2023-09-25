import axios from "axios";
import {
  LOGIN_USER,
  POST_NEW_USER,
  TEST_TOKEN,
  GET_BOOK_DETAIL,
  GET_ALL_BOOKS,
  POST_BOOK,
  DELETE_BOOK,
  EDIT_BOOK
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
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    })
    window.localStorage.setItem('token',res.data.token);
    dispatch(testToken(res.data.token));
  } catch (error) {
    console.log(error)
  }
};

export const testToken = (token) => async dispatch => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/users/test_token/',
    {headers:{'Content-Type':'application/json', 'Authorization': ` Token ${token}`}});
    return dispatch({
      type: TEST_TOKEN,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type:TEST_TOKEN,
      payload: 'Not authorized'
    })
  }
}

export function postNewBook(payload) {
  return function (dispatch) {
      try {
          axios.post('http://127.0.0.1:8000/library/all_books/', payload)
          .then((data) => {
              return dispatch({
                  type: POST_BOOK,
                  payload: data
              });
          })
      } catch (error){
          console.error(error);
      }
  }
};

export function getAllBooks(){
  return async function (dispatch) {
      try {
          var response = await axios.get('http://127.0.0.1:8000/library/all_books/')
          return dispatch({
              type: GET_ALL_BOOKS,
              payload: response.data
          })
      } catch (error) {
          console.error(error);
      }
  }
};

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var response = await axios.get('http://127.0.0.1:8000/library/all_books/'+id)
      if (response.data) {
        return dispatch({
          type: GET_BOOK_DETAIL,
          payload: response.data,
        });
      } else {
        console.error(`No se encontró un libro con el ID: ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export function editBook(id) {
  return async function (dispatch) {
    try {
      var response = await axios.put('http://127.0.0.1:8000/library/all_books/'+id)
      if (response.data) {
        return dispatch({
          type: EDIT_BOOK,
          payload: response.data,
        });
      } else {
        console.error(`Book with ID ${id} not found`);
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export function deleteBook(id) {
  return async function (dispatch) {
    try {
      var response = await axios.delete('http://127.0.0.1:8000/library/all_books/'+id)
      if (response.data) {
        return dispatch({
          type: DELETE_BOOK,
          payload: response.data,
        });
      } else {
        console.error(`Book with ID ${id} not found`);
      }
    } catch (error) {
      console.error(error);
    }
  };
};