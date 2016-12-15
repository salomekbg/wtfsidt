import React, { Component } from 'react';
import { connect } from 'react-redux';

class Events extends Component {
  render(){
      if(this.props.liveEvents.length === 0){
        var components = function(){
          return(
            <ul>
              <li>No events in your area today!  Check back later.</li>
            </ul>
          )
        }
      } else {
      components = this.props.liveEvents.map((liveEvent, index) => {
        return(
          <div key={index} className="col-md-12 event">
            <div className="row">
              <div className="col-md-1">
                <img src={liveEvent.image_url} />
              </div>
                <div className="col-md-11">
                  <h3><a href={liveEvent.url} target="_blank">{liveEvent.title}</a></h3>
                  {liveEvent.description !== null ? <li className="description">{liveEvent.description}</li> : <li>No Description Available<br /></li>}<br />
                  <li><u>Start Time:</u> {liveEvent.start_time}</li>
                </div>
            </div>
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
    liveEvents: state.eventsReducer.events
  }
}

export default connect(mapStateToProps)(Events);
