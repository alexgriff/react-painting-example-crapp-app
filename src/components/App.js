import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import PaintingsContainer from './PaintingsContainer';
import { Route } from 'react-router-dom';
import { api } from '../services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: { user: {} }
    };
  }

  componentDidMount() {
    // const token = localStorage.getItem('token');
    //
    // if (token) {
    api.auth.getCurrentUser().then(user => {
      if (!user.error) {
        const updatedState = { ...this.state.auth, user };
        this.setState({ auth: updatedState });
      }
    });
    // }
  }

  handleLogin = user => {
    const currentUser = { user: user };
    this.setState({ auth: currentUser });
    localStorage.setItem('token', user.jwt);
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ auth: { user: {} } });
  };

  render() {
    const { auth } = this.state;
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
          currentUser={auth.user}
          handleLogout={this.handleLogout}
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <Route
              exact
              path="/"
              render={props => <About {...props} loggedIn={!!auth.user.id} />}
            />
            <Route
              path="/login"
              render={props => {
                return <Login {...props} handleLogin={this.handleLogin} />;
              }}
            />
            <Route
              path="/paintings"
              render={props => (
                <PaintingsContainer {...props} loggedIn={!!auth.user.id} />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
