import merge from 'lodash/merge';
import {RECEIVE_SINGLE_FINANCE, VIEW_SINGLE_FINANCE} from "../actions/finance_actions";
  import {RECEIVE_SINGLE_FIRM} from "../actions/firm_actions";

const defaultState = {
  finance: {year: "", valuation: "", assets: "", liabilities: "",
gross_income: "", expenses: ""},
  errors: []
};

const FinancesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case VIEW_SINGLE_FINANCE:
      return merge({}, state, {finance: action.finance});
    case RECEIVE_SINGLE_FIRM:
      return merge({}, state, defaultState);
  default: return state;
  }
};


export default FinancesReducer;
