import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import PaintingsContainer from './PaintingsContainer';
import { Route } from 'react-router-dom';
import { api } from '../services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      auth: { user: {} }
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      api.auth.getCurrentUser().then(data => {
        const currentUser = { user: data };
        this.setState({ auth: currentUser });
      });
    }
  }

  handleLogin = user => {
    const currentUser = { user: user };
    this.setState({ auth: currentUser });
    localStorage.setItem('token', user.id);
  };

  handleLogout = () => {
    this.setState({ auth: { user: {} } });
    localStorage.removeItem('token');
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
            <Route exact path="/" component={About} />
            <Route
              path="/login"
              render={props => {
                return <Login {...props} handleLogin={this.handleLogin} />;
              }}
            />
            <Route path="/paintings" component={PaintingsContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
