import { connect } from 'react-redux';
import FirmsIndex from './firm_index';

import { requestAllFirms, createFirm, editFirm, destroyFirm }
  from '../../actions/firm_actions';

import { allFirms } from '../../reducers/selectors';

const mapStateToProps = state => ({
  firms: allFirms(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  destroyFirm: Firm => dispatch(destroyFirm(Firm)),
  requestFirms: () => dispatch(requestAllFirms()),
  createFirm: (Firm, Contacts, Finances) =>
  dispatch(createFirm(Firm, Contacts, Finances)),
  editFirm: Firm => dispatch(editFirm(Firm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirmsIndex);
