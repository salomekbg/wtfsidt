import React, { Component } from 'react';
import { connect } from 'react-redux';

class Concerts extends Component {
  render(){
    var concerts = this.props.concerts.concert_info.map((concert, index) => {
      return (
        <ul key={index}>
          <li><h2><a href={concert.ticket_url} target="_blank">{concert.artist}</a></h2></li>
          <li>{concert.venue_name}</li>
          <li>{concert.venue_address}, {concert.venue_city}</li><br />
          <li className="last"><u>Start Time:</u> {concert.start_time}</li>
        </ul>
      )

    })
    return(
      <div className="main">
        {concerts}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    concerts: state.concertsReducer.concerts
  }
}

export default connect(mapStateToProps)(Concerts);
