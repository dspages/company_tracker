import { combineReducers } from 'redux';
import FirmsReducer from './firms_reducer';
import ContactsReducer from './contacts_reducer';
import FinancesReducer from './finances_reducer';

export default combineReducers({
  firms: FirmsReducer,
  contacts: ContactsReducer,
  finances: FinancesReducer
});
