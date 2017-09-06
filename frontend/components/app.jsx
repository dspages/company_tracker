import React from 'react';
import FirmsIndexContainer from './firm_index/firms_index_container';
import FirmEditContainer from './firm_edit/firm_edit_container';
import FirmShowContainer from './firm_show/firm_show_container';
import {Route, Switch, Link, HashRouter} from 'react-router-dom';

const App = () => (
  <div className = "main">
    <Switch>
      <Route path = "/firms/:firmID/edit" component = {FirmEditContainer} />
      <Route path = "/firms/:firmID" component = {FirmShowContainer} />
      <Route path = "/" component = {FirmsIndexContainer} />
    </Switch>
  </div>
);


export default App;
