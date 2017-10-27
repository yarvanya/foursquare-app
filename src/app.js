import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile/Profile';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  onSignIn() {
    this.setState({
      isLoggedIn: true
    });
  }

  onSignOut() {
    this.setState({
      isLoggedIn: false
    })
  }

  renderContentSection() {
    if (!this.state.isLoggedIn) {
      return null;
    }
    return (
      <div>
        <div>Here will be google maps</div>
        <div>Here will be list of venues</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Profile
          onSignIn={() => this.onSignIn()}
          onSignOut={() => this.onSignOut()}
          isLoggedIn={this.state.isLoggedIn}
        />
        {this.renderContentSection()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
