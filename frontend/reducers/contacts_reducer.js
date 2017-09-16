import merge from 'lodash/merge';
import {RECEIVE_SINGLE_CONTACT, VIEW_SINGLE_CONTACT} from "../actions/contact_actions";
  import {RECEIVE_SINGLE_FIRM} from "../actions/firm_actions";

const defaultState = {
  contact: {name: "", notes: "", email: ""},
  errors: []
};

const ContactsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case VIEW_SINGLE_CONTACT:
      return merge({}, state, {contact: action.contact});
    case RECEIVE_SINGLE_FIRM:
      return merge({}, state, defaultState);
  default: return state;
  }
};


export default ContactsReducer;
