import merge from 'lodash/merge';
import {RECEIVE_SINGLE_CONTACT,
  RECEIVE_ALL_CONTACTS,
  REMOVE_SINGLE_CONTACT,
  RECEIVE_CONTACT_ERRORS,
  CREATE_SINGLE_CONTACT} from "../actions/contact_actions";

const defaultState = {
  contactList: {},
  errors: [],
  currentContact: -1
};

const ContactsReducer = (state = defaultState, action) => {

  Object.freeze(state);
  switch(action.type){
    case CREATE_SINGLE_CONTACT:
    return merge({}, state, {contactList: { [action.contact.id]: action.contact }});
    case RECEIVE_SINGLE_CONTACT:
      return merge({}, state, {currentContact: action.contact.id, contactList: { [action.contact.id]: action.contact }});
    case RECEIVE_ALL_CONTACTS:
      const contact = action.contacts;
      let obj={
        contactList: contact,
        currentContact: -1
      };
    return obj;
    case REMOVE_SINGLE_CONTACT:
      let nextState = merge({}, state);
      delete nextState.contactList[action.contact.id];
      return nextState;
    default: return state;
  }
};


export default ContactsReducer;
