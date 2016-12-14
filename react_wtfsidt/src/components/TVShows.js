import React, { Component } from 'react';
import { connect } from 'react-redux';

class Shows extends Component {
  render(){
    var streamingMovies = this.props.shows.movies_results.map((movie, index) => {
      return (
          <div key={index} className='stream-movie'>
            <ul key={index}>
              <li><img src={movie.image} alt='movie' /></li>
              <li><h2><a href={movie.url} target="_blank">{movie.title}</a></h2></li>
              <li>Rated: {movie.rating}</li>
              <li className="last"><u>Release Date:</u> {movie.release_date}</li>
            </ul>
          </div>

      )
    })

    var streamingShows = this.props.shows.shows_results.map((show, index) => {
      return (
          <div key={index} className='stream-show'>
            <ul key={index}>
              <li><img src={show.image} alt='show' /></li>
              <li><h2><a href={show.url} target="_blank">{show.title}</a></h2></li>
              <li className="last"><u>First Aired:</u> {show.first_aired}</li>
            </ul>
          </div>
      )
    })

    return(
      <div className="main">
        {streamingMovies}
        {streamingShows}
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
