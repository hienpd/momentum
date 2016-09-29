import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import Welcome from 'components/Welcome';
import Sidebar from 'components/Sidebar';
import Dashboard from 'components/Dashboard';
import Goal from 'components/Goal';
import NewGoal from 'components/NewGoal';
import Settings from 'components/Settings';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={Welcome} path="/" />
      <Route component={Sidebar} path="app">
        <IndexRoute component={Dashboard} />
        <Route component={Goal} path="goal/1" />
        <Route component={NewGoal} path="newgoal" />
        <Route component={Settings} path="settings" />
      </Route>
    </Router>;
  }
});

export default Routes;
