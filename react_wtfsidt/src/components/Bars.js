import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import setFavorite from '../actions/setFavorite'

class Bars extends Component {
  constructor(){
    super()

    this.state = {
      favorites: []
    }
  }

  render(){
    var combo = [];
    for (var bar in this.props.bars) {combo.push(this.props.bars[bar])}
    if(this.props.bars.length === 0){
      var components = <li>You have no bars</li>
    } else {
    components = combo[0].map((bar, index) => {
      return (
        <div key={index} className="col-md-4">
          <h3><a href={bar.url} target="_blank">{bar.name}</a></h3>
          <li className='height'>{bar.image === null ? <img src="https://s29.postimg.org/u899qm0lz/no_image.jpg" alt="placeholder" /> : <img src={bar.image} alt="placeholder" />}</li>
          <div className='height'>
            <li>Yelp Rating: {bar.rating}</li>
            <li>Address: {bar.address}, {bar.city} {bar.zipcode}</li>
            {bar.phone !== null ? <li>Phone: {bar.phone}</li> : null}
            <li>Categories: {bar.categories}</li>
            <label htmlFor="fav_restaurant">Mark as Favorite</label>
            {combo[1].includes(bar.id) ? <input type="checkbox" defaultChecked="true" onChange={this.handleFavoriteCheckBox.bind(this)} name={bar.name} id={bar.id} /> : <input type="checkbox" onChange={this.handleFavoriteCheckBox.bind(this)} name={bar.name} id={bar.id} />}
          </div>
        </div>
      )
    })}

    return(
      <div className='container main components'>
        <div className='row'>
          {components}
        </div>
      </div>
    )
  }

  handleFavoriteCheckBox(event){
    this.props.setFavorite(event.target.id, event.target.checked)
  }
}

function mapStateToProps(state){
  return {
    bars: state.barsReducer.bars,
    favorites: state.favoritesReducer.favorites
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setFavorite }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Bars);
