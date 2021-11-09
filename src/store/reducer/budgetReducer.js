import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
} from "../action/actionTypes";
// reducer with initial state

export function budgetReducer(state = {}, action) {
  console.log(action.type);
  switch (action.type) {
    case API_CALL_REQUEST:
      let updatedInfo = { ...state, isLoading: true };
      return updatedInfo;
    case API_CALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        budgetdata: [action.data],
      };
    case API_CALL_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
}
