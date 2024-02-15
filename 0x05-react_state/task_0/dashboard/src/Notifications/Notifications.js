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
          <p>Click the button to show/hide notifications</p>
          <button onClick={this.handleDisplayDrawer}>Show Notifications</button>
          <button onClick={this.handleHideDrawer}>Hide Notifications</button>
        </header>
        <main className="App-main">
          <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
        </main>
      </div>
    );
  }
}

export default App;
