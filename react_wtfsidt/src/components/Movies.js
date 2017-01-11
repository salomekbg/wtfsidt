import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
  render(){
    var components = this.props.movies.map((movie, index) => {
      var re = /http:\D*\d*[^&d]/
      var movieUrl;
      for(var i = 0; i<movie.showtimes.length; i++){
        if(movie.showtimes[i].includes('http')){
          movieUrl = movie.showtimes[i].match(re)[0] + '&location=' + this.props.zipcode
          break
        }
      }
      return(
        <div key={index} className="col-md-4">
          {movie.image_url === "NO IMAGE" ? <li><img className="movie" src="https://s28.postimg.org/gwri9yx1p/no_img.jpg" alt="placeholder" /></li> : <li><img className="movie" src={movie.image_url} alt='movie pic'/></li>}
          <h3><a href={movieUrl} target="_blank">{movie.title}</a></h3>
          <li>{movie.description}</li><br />
          <li>Genres: {movie.genres.join(', ')}</li>
        </div>
      )
    }, this)

    return(
      <div className='container main components'>
        <div className='row'>
          {components}
        </div>
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
