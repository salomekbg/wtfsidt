import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
  render(){
    var zipcode = this.props.zipcode
    debugger
    var movies = this.props.movies.map((movie, index) => {
      var re = /http:\D*\d*[^&d]/
      var url = movie.showtimes[0].match(re)[0]
      debugger
      return(
        <ul key={index}>
          <li><h2><a href={url} target="_blank">{movie.title}</a></h2></li>
          <li>{movie.description}</li>
          <li>Genres: {movie.genres.map((genre, index) => {
            return(<span key={index}>{genre} </span>)
          })}</li>
          <li><img src={movie.image_url} alt='movie pic'/></li>
        </ul>
      )
    })

    return(
      <div>
        {movies}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    movies: state.moviesReducer.movies,
    zipcode: state.usersReducer.zipcode
  }
}

export default connect(mapStateToProps)(Movies);
