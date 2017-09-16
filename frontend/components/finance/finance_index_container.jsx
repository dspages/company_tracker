import { connect } from 'react-redux';
import FinancesIndex from './finance_index';

import { createFinance, editFinance, destroyFinance, editFinanceLocal }
  from '../../actions/finance_actions';

import { selectedFinances, selectedFirmID, oneFinance } from '../../reducers/selectors';

const mapStateToProps = state => ({
  finance: oneFinance(state),
  selectedFinances: selectedFinances(state),
  selectedFirmID: selectedFirmID(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  destroyFinance: Finance => dispatch(destroyFinance(Finance)),
  createFinance: (Finance) => dispatch(createFinance(Finance)),
  editFinance: Finance => dispatch(editFinance(Finance)),
  editFinanceLocal: Finance => dispatch(editFinanceLocal(Finance))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesIndex);
