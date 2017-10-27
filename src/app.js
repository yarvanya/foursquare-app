import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';
import Profile from './components/Profile/Profile';
import GoogleMaps from './components/Map/Map';
import Venues from './components/Venues/Venues';
import '../main.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      isLoggedIn: false
    }
  }
  
  loadVenues() {
    const url = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=35.6895000%2C%20139.6917100&query=restaurant&intent=checkin&client_id=HPFNK0MP3UL3R5HQL4TMC1MFQ1TZZHEMSBTKU3QC0YCBMDEB&client_secret=K4AA3FTIPSBQMSNVNBXY5JSZOM23LYPJCEWQ0X23FK4T5O3Z';

    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((err, res) => {
      const venues = res.body.response.venues;
      this.setState({
        venues: venues
      })
    })
  }
  
  onSignIn() {
    this.setState({
      isLoggedIn: true
    });

    this.loadVenues();
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
        <GoogleMaps venues={this.state.venues} />
        <Venues venues={this.state.venues} />
      </div>
    )
  }

  render() {
    return (
      <div className='page'>
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
