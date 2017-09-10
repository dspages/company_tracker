import React from 'react';
import FirmsIndexContainer from './firm_index/firms_index_container';
import FirmShowContainer from './firm_show/firm_show_container';
import ContactDetailContainer from './contact_detail/contact_detail_container';
import FinanceDetailContainer from './finance_detail/finance_detail_container';
import {Route, Switch, Link, HashRouter} from 'react-router-dom';

const App = () => (
  <div className = "main">
    <Switch>
      <Route path = "/firms/:firmID" component = {FirmShowContainer} />
      <Route path = "/contacts/:contactID/edit" component = {ContactDetailContainer} />
      <Route path = "/finances/:financeID/edit" component = {FinanceDetailContainer} />
      <Route path = "/" component = {FirmsIndexContainer} />
    </Switch>
  </div>
);


export default App;
