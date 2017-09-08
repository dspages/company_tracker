import { connect } from 'react-redux';
import ContactDetailView from './contact_detail_view';
  import { createContact, editContact, destroyContact, requestSingleContact }
    from '../../actions/contact_actions';

import { oneContact } from '../../reducers/selectors';

const mapStateToProps = state => {
  // console.log(state);
    return {
    contact: oneContact(state, state.contacts.contact),
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
)(ContactDetailView);
