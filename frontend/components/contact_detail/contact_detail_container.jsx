import { connect } from 'react-redux';
import ContactForm from '../contact/contact_form';
  import { createContact, editContact, destroyContact, requestSingleContact }
    from '../../actions/contact_actions';

import {oneContact } from '../../reducers/selectors';

const mapStateToProps = state => {
  // console.log(state);
    return {
    contact: oneContact(state, state.contact),
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => ({
  requestContact: (id) => dispatch(requestSingleContact(id)),
  editContact: Contact => dispatch(editContact(Contact))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
