import merge from 'lodash/merge';
import {RECEIVE_SINGLE_FIRM,
  RECEIVE_ALL_FIRMS,
  REMOVE_SINGLE_FIRM,
  RECEIVE_FIRM_ERRORS,
  CREATE_SINGLE_FIRM} from "../actions/firm_actions";

const defaultState = {
  firmList: {},
  errors: [],
  currentFirm: -1
};

const FirmsReducer = (state = defaultState, action) => {

  Object.freeze(state);
  switch(action.type){
    case CREATE_SINGLE_FIRM:
    return merge({}, state, {firmList: { [action.firm.id]: action.firm }});
    case RECEIVE_SINGLE_FIRM:
      return merge({}, state, {currentFirm: action.firm.id, firmList: { [action.firm.id]: action.firm }});
    case RECEIVE_ALL_FIRMS:
      const firm = action.firms;
      let obj={
        firmList: firm,
        currentFirm: -1
      };
    return obj;
    case REMOVE_SINGLE_FIRM:
      let nextState = merge({}, state);
      delete nextState.firmList[action.firm.id];
      return nextState;
    default: return state;
  }
};


export default FirmsReducer;
