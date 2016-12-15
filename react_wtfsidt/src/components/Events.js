import React, { Component } from 'react';
import { connect } from 'react-redux';

class Events extends Component {
  render(){
      if(this.props.liveEvents.length === 0){
        var liveEvents = function(){
          return(
            <ul>
              <li>No events in your area today!  Check back later.</li>
            </ul>
          )
        }
      } else {
      liveEvents = this.props.liveEvents.map((liveEvent, index) => {
        return(
          <ul key={index} className="list">
            <li><img className="event" src={liveEvent.image_url} /></li>
            <li><h2><a href={liveEvent.url} target="_blank">{liveEvent.title}</a></h2></li>
            {liveEvent.description !== null ? <li className="description">{liveEvent.description}</li> : <li>No Description Available<br /></li>}<br />
            <li><u>Start Time:</u> {liveEvent.start_time}</li>
          </ul>
        )
      })}

    return(
      <div className="main">
        {liveEvents}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    liveEvents: state.eventsReducer.events
  }
}

export default connect(mapStateToProps)(Events);
