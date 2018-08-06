import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { setCurrentUser, logoutUser } from './actions/authActions';
// import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import Sidebar from './components/layout/Sidebar';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import Dashboard from './components/dashboard/Dashboard';
// import CreateProfile from './components/create-profile/CreateProfile';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <div className="row">
                <Sidebar />
                <Main />
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
