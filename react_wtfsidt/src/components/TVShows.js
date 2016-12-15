import React, { Component } from 'react';
import { connect } from 'react-redux';

class Shows extends Component {
  render(){
    var streamingMovies = this.props.shows.movies_results.map((movie, index) => {
      return (
          <div key={index} className="col-md-4">
            <li><img className="movie" src={movie.image} alt='movie' /></li>
            <li><h2><a href={movie.url} target="_blank">{movie.title}</a></h2></li>
            <li>Rated: {movie.rating}</li><br />
            <li className="last"><u>Release Date:</u> {movie.release_date}</li>
          </div>

      )
    })

    var streamingShows = this.props.shows.shows_results.map((show, index) => {
      return (
          <div key={index} className="col-md-4">
            <li><img className="tv" src={show.image} alt='show' /></li>
            <li><h2><a href={show.url} target="_blank">{show.title}</a></h2></li>
            <li className="last"><u>First Aired:</u> {show.first_aired}</li>
          </div>
      )
    })

    return(
      <div className="container main components">
        <div className='row'>
        <h2 className="shift">Movies:</h2>
          {streamingMovies}
        </div>
        <div className='row'>
        <h2 className="shift">TV Shows:</h2>
          {streamingShows}
        </div>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    shows: state.showsReducer.shows
  }
}

export default connect(mapStateToProps)(Shows);
