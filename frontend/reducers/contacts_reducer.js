import merge from 'lodash/merge';
import {RECEIVE_SINGLE_CONTACT} from "../actions/contact_actions";
  import {RECEIVE_SINGLE_FIRM} from "../actions/firm_actions";

const defaultState = {
  contactList: {},
  errors: [],
  currentContact: -1
};

const ContactsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SINGLE_CONTACT:
      return merge({}, state, {contact: action.contact});
  }
};


export default ContactsReducer;
