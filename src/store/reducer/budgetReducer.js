import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  ADD_ENTRY_SUCCESS,
} from "../action/actionTypes";
// reducer with initial state

let initialState = {
  isLoading: false,
  isError: false,
  budgetdata: [],
  total: null,
};

export function budgetReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case API_CALL_REQUEST:
      let updatedInfo = { ...state, isLoading: true };
      return updatedInfo;
    case ADD_ENTRY_SUCCESS:
      return { ...state };
    case API_CALL_SUCCESS:
      let totalbudget = null;
      let incomebudget = null;
      let expencebudget = null;
      for (let i = 0; i < action.data.budgetdata.length; i++) {
        totalbudget += action.data.budgetdata[i].amount;
        if (action.data.budgetdata[i].isExpense === "true") {
          expencebudget += action.data.budgetdata[i].amount;
        } else if (action.data.budgetdata[i].isExpense === "false") {
          incomebudget += action.data.budgetdata[i].amount;
        }
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        budgetdata: [action.data.budgetdata],
        total: totalbudget,
        income: incomebudget,
        expence: expencebudget,
      };
    case API_CALL_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
}
