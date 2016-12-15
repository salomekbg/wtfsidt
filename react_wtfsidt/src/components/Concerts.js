import React, { Component } from 'react';
import { connect } from 'react-redux';

class Concerts extends Component {
  render(){
    if(this.props.concerts.concert_info.length === 0){
      var components = function(){
        return(
          <ul>
            <li>No concerts in your area today! Check back later.</li>
          </ul>
        )
      }
    } else {
      components = this.props.concerts.concert_info.map((concert, index) => {
        return (
          <div key={index} className="col-md-12 concert">
            <h3>{concert.ticket_url ? <a href={concert.ticket_url} target="_blank">{concert.artist}</a> : concert.artist}</h3>
            <li>Location: {concert.venue_name}</li>
            <li>{concert.venue_address}, {concert.venue_city}</li><br />
            <li><u>Start Time:</u> {concert.start_time}</li>
          </div>
        )
    })}

    return(
      <div className="container main components">
        <div className="row">
          {components}
        </div>
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
