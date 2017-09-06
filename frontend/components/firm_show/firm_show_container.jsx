import { connect } from 'react-redux';
import FirmShow from './firm_show';

import { requestSingleFirm }
  from '../../actions/firm_actions';

import { allFirms, oneFirm } from '../../reducers/selectors';

const mapStateToProps = state => {
  // console.log(state);
    return {
    firm: oneFirm(state,state.firms.currentFirm),
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => ({
  requestFirm: (id) => dispatch(requestSingleFirm(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirmShow);
