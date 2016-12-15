import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
  render(){
    var movies = this.props.movies.map((movie, index) => {
      var re = /http:\D*\d*[^&d]/
      var movieUrl;
      for(var i = 0; i<movie.showtimes.length; i++){
        if(movie.showtimes[i].includes('http')){
          movieUrl = movie.showtimes[i].match(re)[0] + '&location=' + this.props.zipcode
          break
        }
      }
      return(
        <ul key={index} className="movielist">
          {movie.image_url === "NO IMAGE" ? <li><img className="movie" src="https://s28.postimg.org/gwri9yx1p/no_img.jpg" alt='no picture found'/></li> : <li><img className="movie" src={movie.image_url} alt='movie pic'/></li>}
          <li><h2><a href={movieUrl} target="_blank">{movie.title}</a></h2></li>
          <li>{movie.description}</li><br />
          <li>Genres: {movie.genres.join(', ')}</li>
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
