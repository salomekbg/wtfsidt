import React, { Component } from 'react';
import { connect } from 'react-redux';

class Events extends Component {
  render(){
    debugger
      var liveEvents = this.props.liveEvents.event_info.map((liveEvent, index) => {
        return(
          <ul key={index}>
            <li><h2><a href={liveEvent.url} target="_blank">{liveEvent.title}</a></h2></li>
            <li>{liveEvent.description}</li>
            <li>Start Time: {liveEvent.start_time}</li>
          </ul>
        )
      })
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
