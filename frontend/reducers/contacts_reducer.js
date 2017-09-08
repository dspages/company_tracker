import merge from 'lodash/merge';
import {RECEIVE_SINGLE_CONTACT,
  REMOVE_SINGLE_CONTACT,
  RECEIVE_CONTACT_ERRORS,
  CREATE_SINGLE_CONTACT} from "../actions/contact_actions";
  import {RECEIVE_SINGLE_FIRM} from "../actions/firm_actions";

const defaultState = {
  contactList: {},
  errors: [],
  currentContact: -1
};

const ContactsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SINGLE_FIRM:
    console.log(action);
    return merge({}, state, {contactList: action.contacts});
    case CREATE_SINGLE_CONTACT:
    return merge({}, state, {contactList: { [action.contact.id]: action.contact }});
    case RECEIVE_SINGLE_CONTACT:
      return merge({}, state, {contactList: { [action.contact.id]: action.contact }});
    case REMOVE_SINGLE_CONTACT:
      let nextState = merge({}, state);
      delete nextState.contactList[action.contact.id];
      return nextState;
    default: return state;
  }
};


export default ContactsReducer;
