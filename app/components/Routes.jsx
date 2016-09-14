import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import Login from 'components/Login';
import Welcome from 'components/Welcome';
import Sidebar from 'components/Sidebar';
import Goals from 'components/Goals';
import Goal from 'components/Goal';
import NewGoal from 'components/NewGoal';
import Friends from 'components/Friends';
import Settings from 'components/Settings';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={Welcome} path="/" />
      <Route component={Sidebar} path="app">
        <IndexRoute component={Goals} />
        <Route component={Goal} path="goal/1" />
        <Route component={NewGoal} path="newgoal" />
        <Route component={Friends} path="friends" />
        <Route component={Settings} path="settings" />
      </Route>
    </Router>;
  }
});

export default Routes;
