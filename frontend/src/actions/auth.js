import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';
import { setAlert } from './alert';

export const login = (email, password) => async (dispatch) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch('http://localhost:5000/' + 'authenticate/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: email,
        Password: password,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    if (data == 404) {
      dispatch({
        type: LOGIN_FAIL,
        payload: data,
      });
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    }

    return data;
  });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
