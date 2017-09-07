import { connect } from 'react-redux';
import ContactsIndex from './contact_index';

import { createContact, editContact, destroyContact }
  from '../../actions/contact_actions';

import { selectedContacts } from '../../reducers/selectors';

const mapStateToProps = state => ({
  selectedContacts: selectedContacts(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  destroyContact: Contact => dispatch(destroyContact(Contact)),
  createContact: (Contact) => dispatch(createContact(Contact)),
  editContact: Contact => dispatch(editContact(Contact))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsIndex);
