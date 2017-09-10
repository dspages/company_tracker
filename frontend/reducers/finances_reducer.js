import merge from 'lodash/merge';
import {RECEIVE_SINGLE_FINANCE, VIEW_SINGLE_FINANCE} from "../actions/finance_actions";
  import {RECEIVE_SINGLE_FIRM} from "../actions/firm_actions";

const defaultState = {
  finance: {},
  errors: []
};

const FinancesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case VIEW_SINGLE_FINANCE:
      return merge({}, state, {finance: action.finance});
  default: return state;
  }
};


export default FinancesReducer;
