import { connect } from 'react-redux';
import FinanceDetailView from './finance_detail_view';
  import { createFinance, editFinance,
    editFinanceLocal, destroyFinance, requestSingleFinance }
    from '../../actions/finance_actions';

import { oneFinance } from '../../reducers/selectors';

const mapStateToProps = state => {
    return {
    finance: oneFinance(state, state.finances.finance),
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => ({
  requestFinance: (id) => dispatch(requestSingleFinance(id)),
  editFinance: Finance => dispatch(editFinance(Finance)),
  editFinanceLocal: Finance => dispatch(editFinanceLocal(Finance))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinanceDetailView);
