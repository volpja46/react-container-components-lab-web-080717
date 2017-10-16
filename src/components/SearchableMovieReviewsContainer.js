import React, { Component } from 'react';

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        {this.state.reviews.map((review) =>{
          return(
            <div className = "review">
              <h3>{review.display_title}</h3>
              <p>{review.headline}</p>
            </div>
          )
        })
      }
      </div>
    )
}

}


export default SearchableMovieReviewsContainer;
