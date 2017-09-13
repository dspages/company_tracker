import merge from 'lodash/merge';
import {RECEIVE_SINGLE_FIRM,
  RECEIVE_ALL_FIRMS,
  REMOVE_SINGLE_FIRM,
  RECEIVE_FIRM_ERRORS,
  CREATE_SINGLE_FIRM} from "../actions/firm_actions";
import {RECEIVE_SINGLE_CONTACT,
  REMOVE_SINGLE_CONTACT,
  RECEIVE_CONTACT_ERRORS,
  CREATE_SINGLE_CONTACT} from "../actions/contact_actions";
import {RECEIVE_SINGLE_FINANCE,
  REMOVE_SINGLE_FINANCE,
  RECEIVE_FINANCE_ERRORS,
  CREATE_SINGLE_FINANCE} from "../actions/finance_actions";
import {receiveContactHelper,
  createContactHelper,
  removeContactHelper} from 'firms_contacts_reducer_helpers';
import {receiveFinanceHelper,
  createFinanceHelper,
  removeFinanceHelper} from 'firms_finances_reducer_helpers';

const defaultState = {
  firmList: {},
  errors: [],
  currentFirm: -1
};

const FirmsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch(action.type){
    case CREATE_SINGLE_FIRM:
      return merge(nextState, {firmList: { [action.firm.id]: action.firm }});
    case RECEIVE_SINGLE_FIRM:
      return merge(nextState, {currentFirm: action.firm.id, firmList: { [action.firm.id]: action.firm }});
    case RECEIVE_ALL_FIRMS:
      const firm = action.firms;
      let obj={
        firmList: firm,
        currentFirm: -1
      };
      return obj;
    case REMOVE_SINGLE_FIRM:
      delete nextState.firmList[action.firm.id];
      return nextState;

    case RECEIVE_SINGLE_CONTACT:
      return receiveContactHelper(nextState,action);
    case CREATE_SINGLE_CONTACT:
      return createContactHelper(nextState, action);
    case REMOVE_SINGLE_CONTACT:
      return removeContactHelper(nextState, action);

    case RECEIVE_SINGLE_FINANCE:
      return receiveFinanceHelper(nextState, action);
    case CREATE_SINGLE_FINANCE:
      return createFinanceHelper(nextState, action);
    case REMOVE_SINGLE_FINANCE:
      return removeFinanceHelper(nextState, action);
      
    default: return state;
  }
};


export default FirmsReducer;
