import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { displayDrawer } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dashboard</h1>
        </header>
        <div className="App-body">
          <p>Welcome to the dashboard!</p>
          <div className="notifications-container">
            <div className="menu-item" onClick={this.handleDisplayDrawer}>
              Your notifications
            </div>
            {displayDrawer && (
              <Notifications
                displayDrawer={displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
