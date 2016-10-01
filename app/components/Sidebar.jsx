import { Link, withRouter } from 'react-router';
import axios from 'axios';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import React from 'react';
import cookie from 'react-cookie';

const Sidebar = React.createClass({
  getInitialState() {
    return this.state = {
      open: false,
      goals: []
    };
  },

  componentWillMount() {
    const username = cookie.load('momentum_username');

    axios.get(`/api/goals/username/${username}`)
      .then((results) => {
        console.log(results);
        this.setState({ goals: results.data })
      })
      .catch((err) => {
        console.error(err);
      });
  },

  handleAvatarClick() {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  },

  handleRequestClose() {
    this.setState({
      open: false
    });
  },

  handleGoToSettings() {
    this.props.router.push('/app/settings');
  },

  handleGoToNewGoal() {
    this.props.router.push('/app/newgoal');
  },

  handleGoToDashboard() {
    this.props.router.push('/app');
  },

  handleLogout() {
    axios.delete('/api/token')
      .then(() => {
        this.props.router.push('/');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  },

  render() {
    return <div className="container-sidebar-layout">
      <nav>
        <div id="user-box"
          onClick={this.handleAvatarClick}
        >
          <div id="avatar">
            <img className="avatar-img" src="http://media1.onsugar.com/files/2014/03/18/945/n/1922153/2d024105f59c4684_thumb_temp_image10906271395178611/i/Kerry-Washington-Makeup-Tutorial.jpg" />
          </div>
          <h1 id="username">kaydub</h1>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem
                primaryText="Settings"
                onClick={this.handleGoToSettings}
              />
              <MenuItem
                primaryText="Log Out"
                onClick={this.handleLogout}
              />
            </Menu>
          </Popover>
        </div>
        <ul id="sidebar-nav">
          <li>
            <a href="#" onClick={this.handleGoToDashboard}>
              <div className="icon-box">
                <i className="fa fa-tachometer fa-lg" aria-hidden="true"></i>
              </div>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" onClick={this.handleGoToSettings}>
            <div className="icon-box">
              <i className="fa fa-cogs fa-lg" aria-hidden="true"></i>
              </div>
              Settings
            </a>
          </li>
          <li>
            <a href="#" onClick={this.handleGoToNewGoal}>
              <div className="icon-box">
                <i className="fa fa-plus fa-lg" aria-hidden="true"></i>
              </div>
              Set a New Goal
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon-box">
                <i className="fa fa-bullseye fa-lg" aria-hidden="true"></i>
              </div>
              Goals
            </a>
          </li>
          <ul id="sidebar-goals">
            {this.state.goals.map((goal, index) => {
              return <li key={index}><Link to={`/app/goal/${goal.goal_id}`}>{goal.goal_name}</Link></li>;
            })}
          </ul>
        </ul>
      </nav>
      <main>
        {React.cloneElement(this.props.children)}
      </main>
    </div>;
  }
});

export default withRouter(Sidebar);
