import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
  render(){
    debugger
    var movies = this.props.movies.map((movie, index) => {
      return(
        <ul key={index}>
          <li><h2>{movie.title}</h2></li>
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
    movies: state.moviesReducer.movies
  }
}

export default connect(mapStateToProps)(Movies);
