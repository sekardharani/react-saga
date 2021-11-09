import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
} from "./actionTypes";
export const requestApiData = () => {
  return (dispatch, getState) => {
    dispatch({ type: API_CALL_REQUEST });
    console.log(getState());
  };
};

export const receiveApiData = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: API_CALL_SUCCESS, data });
    console.log(getState());
  };
};

export const errorApiData = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: API_CALL_FAILURE });
  };
};
