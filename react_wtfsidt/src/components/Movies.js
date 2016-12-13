import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
  render(){
    var movies = this.props.movies.map((movie, index) => {
      var re = /http:\D*\d*[^&d]/
      var url = movie.showtimes[0].match(re)[0] + '&location=' + this.props.zipcode
      return(
        <ul key={index}>
          <li><h2><a href={url} target="_blank">{movie.title}</a></h2></li>
          <li>{movie.description}</li>
          <li>Genres: {movie.genres.join(', ')}</li>
          <li><img src={movie.image_url} alt='movie pic'/></li>
        </ul>
      )
    }, this)

    return(
      <div className='main'>
        {movies}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    movies: state.moviesReducer.movies,
    zipcode: state.usersReducer.zip_code
  }
}

export default connect(mapStateToProps)(Movies);
