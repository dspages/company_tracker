import { connect } from 'react-redux';
import ContactsIndex from './contact_index';

import { createContact, editContact, destroyContact, editContactLocal }
  from '../../actions/contact_actions';

import { selectedContacts, selectedFirmID, oneContact } from '../../reducers/selectors';

const mapStateToProps = state => ({
  contact: oneContact(state),
  selectedContacts: selectedContacts(state),
  selectedFirmID: selectedFirmID(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  destroyContact: Contact => dispatch(destroyContact(Contact)),
  createContact: (Contact) => dispatch(createContact(Contact)),
  editContact: Contact => dispatch(editContact(Contact)),
  editContactLocal: Contact => dispatch(editContactLocal(Contact))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsIndex);
