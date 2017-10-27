import React from 'react';
import {CSVLink} from 'react-csv';
import './venues.css';

class Venues extends React.Component {
  render() {

    const list = this.props.venues.map((venue, i) => {
      return (
        <tr>
          <td key={i}>{i+1}</td>
          <td>{venue.name}</td>
          <td>{venue.location.city}</td>
          <td>{venue.location.address}</td>
          <td>{venue.location.lat}</td>
          <td>{venue.location.lng}</td>
        </tr>
      )
    })

    const csvData = this.props.venues.map((venue, i) => {
      return [
        [i+1],
        [venue.name],
        [venue.location.city],
        [venue.location.address],
        [venue.location.lat],
        [venue.location.lng]
      ];
    })

    return (
      <div>
        <div>
          <h1 className="venuesHeading">All found venues in Tokyo city:</h1>
          <CSVLink className='exportCSVbutton' data={csvData} >Export CSV</CSVLink>
        </div>
        <table className="venues">
          <tr>
            <th>P/p</th>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
          {list}
        </table>
      </div>
    )
  }
}

export default Venues;
