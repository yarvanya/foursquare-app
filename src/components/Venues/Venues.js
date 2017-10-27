import React from 'react';
import './venues.css';

class Vanues extends React.Component {
  render() {
    const list = this.props.venues.map((venue, i) => {
      return (
        <tr>
          <td key={i}><li>{venue.name}</li></td>
          <td>{venue.location.city}</td>
          <td>{venue.location.address}</td>
          <td>{venue.location.lat}</td>
          <td>{venue.location.lng}</td>
        </tr>
      )
    })

    return (
      <div className="containerForVenues">
        <h2>All found venues in Tokyo city</h2>
        <table className="customers">
          <tr>
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

export default Vanues;
