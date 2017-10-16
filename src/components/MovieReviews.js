import React, { Component } from 'react';
import 'isomorphic-fetch';


const MovieReviews = (props) => {
    return (
      <div className="review-list">
        {props.reviews.map((review) =>{
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

  MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews;
