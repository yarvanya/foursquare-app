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
      isLoggedIn: false,
      query: 'station',
      radius: 1000,
    }
  }

  loadVenues() {
    const client_id = 'client_id=HPFNK0MP3UL3R5HQL4TMC1MFQ1TZZHEMSBTKU3QC0YCBMDEB';
    const client_secret = 'client_secret=K4AA3FTIPSBQMSNVNBXY5JSZOM23LYPJCEWQ0X23FK4T5O3Z';
    const findingURL = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=35.6895000%2C%20139.6917100';
    const findingRadius = 'radius=' + this.state.radius;
    const findingQuery = 'query=' + this.state.query;
    const url = findingURL + '&' + findingQuery + '&intent=checkin&' + findingRadius + '&' + client_id + '&' + client_secret;

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

  findingTargetVenue = val => {
    const query = val.target.value.toLowerCase().trim();
    this.setState({
      query: query
    });
    this.loadVenues();
  };

  findingTargetRadius = val => {
    const radius = val.target.value;
    this.setState({
      radius: radius
    });
    this.loadVenues();
  };

  renderContentSection() {
    if (!this.state.isLoggedIn) {
      return null;
    }
    return (
      <div>
        <div className="form">
          <h3>Find your place in your favorite city with Foursquare API('station' by default):</h3>
          <input
            type="text"
            placeholder="Search by business name, or keyword..."
            className="inputElememt"
            onChange={this.findingTargetVenue}
          />
          <h3>Find it in radius:</h3>
          <select id="country" name="radius" onChange={this.findingTargetRadius}>
            <option value="1000">1km</option>
            <option value="2000">2km</option>
            <option value="3000">3km</option>
            <option value="4000">4km</option>
            <option value="5000">5km</option>
            <option value="10000">10km</option>
          </select>
        </div>
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
