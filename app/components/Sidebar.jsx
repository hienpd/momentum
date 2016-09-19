import React from 'react';

const Sidebar = React.createClass({
  render() {
    return <div className="container-sidebar-layout">
      <nav>
        <div id="user-box">
          <div id="avatar">
            <img className="avatar-img" src="http://media1.onsugar.com/files/2014/03/18/945/n/1922153/2d024105f59c4684_thumb_temp_image10906271395178611/i/Kerry-Washington-Makeup-Tutorial.jpg" />
          </div>
          <h1 id="username">kerrywa</h1>
        </div>
        <ul id="sidebar-nav">
          <li>
            <a href="#">
              <div className="icon-box">
                <i className="fa fa-tachometer fa-lg" aria-hidden="true"></i>
              </div>
              Dashboard
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
            <li><a href="#">Sample goal 1</a></li>
            <li><a href="#">Sample goal 2</a></li>
          </ul>
          <li>
            <a href="#">
              <div className="icon-box">
                <i className="fa fa-plus fa-lg" aria-hidden="true"></i>
              </div>
              Set a New Goal
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon-box">
                <i className="fa fa-users fa-lf" aria-hidden="true"></i>
              </div>
              Friends
            </a>
          </li>
          <li>
            <a href="#">
            <div className="icon-box">

              <i className="fa fa-cogs fa-lg" aria-hidden="true"></i>
              </div>
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <main>
        {React.cloneElement(this.props.children)}
      </main>
    </div>;
  }
});

export default Sidebar;
