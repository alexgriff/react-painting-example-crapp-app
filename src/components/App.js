import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About';
import PaintingsContainer from './PaintingsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <About />
            {/* <PaintingsContainer /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
