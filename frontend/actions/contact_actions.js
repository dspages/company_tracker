
export const RECEIVE_SINGLE_CONTACT = "RECEIVE_SINGLE_CONTACT";
export const REMOVE_SINGLE_CONTACT = "REMOVE_SINGLE_CONTACT";
export const RECEIVE_CONTACT_ERRORS = "RECEIVE_CONTACT_ERRORS";
export const CREATE_SINGLE_CONTACT = "CREATE_SINGLE_CONTACT";

import * as APIUtil from '../util/api_util';

export const createContact = ccontact => dispatch => (
  APIUtil.createContact(ccontact).then(contact => {
    dispatch(createSingleContact(contact));
    return contact;
  }).fail(err => dispatch(receiveContactErrors(err.responseJSON)))
);

export const editContact = econtact => dispatch => (
  APIUtil.editContact(econtact).then(contact => {
    dispatch(receiveSingleContact(contact));
    return contact;
  }).fail(err => dispatch(receiveContactErrors(err.responseJSON)))
);

export const destroyContact = dcontact => dispatch => (
  APIUtil.deleteContact(dcontact).then(() => {
    dispatch(removeSingleContact(dcontact));
    return [];
  }).fail(err => dispatch(receiveContactErrors(err.responseJSON)))
);

export const createSingleContact = contact => ({
  type: CREATE_SINGLE_CONTACT,
  contact
});

export const receiveSingleContact = contact => ({
  type: RECEIVE_SINGLE_CONTACT,
  contact
});

export const removeSingleContact = contact => ({
  type: REMOVE_SINGLE_CONTACT,
  contact
});

export const receiveContactErrors = errors => ({
  type: RECEIVE_CONTACT_ERRORS,
  errors
});
