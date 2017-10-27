import React from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import './profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {       
      name: 'Please, sign in!'
    };
  }

  signIn = (response) => {
    const profileName = response.getBasicProfile().getName();
    if (profileName) {
      this.setState({
        name: profileName
      })
    }

    const onSignIn = this.props.onSignIn;
    if (onSignIn) {
      onSignIn();
    }
  }

  signOut = (response) => {
    const onSignOut = this.props.onSignOut;
    if (onSignOut) {
      onSignOut();
    }
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <div>
        {!isLoggedIn &&
        <GoogleLogin
          className="loginButton"
          clientId="482936635819-kfr4pl8qjvo7nd957ho6dn3et224jbjk.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.signIn}
        />}
        {isLoggedIn &&
        <div>
          <h1 className="profileGreeting">Welcome, {this.state.name}</h1>
          <GoogleLogout
            className="logoutButton"
            buttonText="Logout"
            onLogoutSuccess={this.signOut}
          >
          </GoogleLogout>
        </div>}
      </div>
    )
  }
}

export default Profile;
