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

const defaultState = {
  firmList: {},
  errors: [],
  currentFirm: -1
};

const FirmsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  let contacts;
  let finances;
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
      contacts = nextState.firmList[action.contact.company_id].contacts;
      contacts = contacts.filter(function(el) {
        return el.id !== action.contact.id;
      });
      contacts.push(action.contact);
      nextState.firmList[action.contact.company_id].contacts = contacts;
      return nextState;
    case CREATE_SINGLE_CONTACT:
      contacts = nextState.firmList[action.contact.company_id].contacts;
      contacts = contacts.filter(function(el) {
        return el.id !== action.contact.id;
      });
      contacts.push(action.contact);
      nextState.firmList[action.contact.company_id].contacts = contacts;
      return nextState;
    case REMOVE_SINGLE_CONTACT:
      contacts = nextState.firmList[action.contact.company_id].contacts;
      contacts = contacts.filter(function(el) {
        return el.id !== action.contact.id;
      });
      nextState.firmList[action.contact.company_id].contacts = contacts;
      return nextState;
      case RECEIVE_SINGLE_FINANCE:
        contacts = nextState.firmList[action.finance.company_id].finances;
        finances = finances.filter(function(el) {
          return el.id !== action.finance.id;
        });
        finances.push(action.finance);
        nextState.firmList[action.finance.company_id].finances = finances;
        return nextState;
      case CREATE_SINGLE_FINANCE:
        finances = nextState.firmList[action.finance.company_id].finances;
        finances = finances.filter(function(el) {
          return el.id !== action.finance.id;
        });
        finances.push(action.finance);
        nextState.firmList[action.finance.company_id].finances = finances;
        return nextState;
      case REMOVE_SINGLE_FINANCE:
        finances = nextState.firmList[action.finance.company_id].finances;
        finances = finances.filter(function(el) {
          return el.id !== action.finance.id;
        });
        nextState.firmList[action.finance.company_id].finances = finances;
        return nextState;
    default: return state;
  }
};


export default FirmsReducer;
