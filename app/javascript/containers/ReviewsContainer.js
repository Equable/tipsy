import React, { Component } from "react";
import ReviewTile from '../tiles/ReviewTile'
import NewReviewTile from "../tiles/NewReviewTile";

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews:[]
    };
    this.fetchReviews = this.fetchReviews.bind(this)
    this.createReviews = this.createReviews.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
  }

  deleteReview(review_id) {
    fetch(`/api/v1/cocktail_review/${review_id}`, {
      method: 'DELETE',
      body: JSON.stringify({ review_id: review_id }),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          this.fetchReviews()
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
          throw (error)
        }
      })
  }

  fetchReviews(){
    fetch(`/api/v1/cocktail_review/${this.props.cocktailId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({reviews: body})
      })
  }

  createReviews(review){
    let reviews = this.state.reviews
    fetch(`/api/v1/cocktail_review`, {
      method: 'POST',
      body: JSON.stringify({ review:  review}),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        reviews = reviews.concat(body)
        this.setState({reviews: reviews})
      })
  }

  handleSubmit(formPayload){
    this.createReviews(formPayload)
  }

  componentDidMount(){
    this.fetchReviews()
  }
  render() {
    let reviews = this.state.reviews.map((review)=>{
      let buttons=false
      if(review.user.user_id == this.props.signedIn.user){buttons=true}
      return(
        <div key={`RTd_${review.id}`} className="cell">
          <ReviewTile buttons={buttons} review={review} matchUser={review.signed_in} deleteReview={this.deleteReview}/>
        </div>
      )
    })
    let container = ()=>{
      if(reviews.length > 0){
        return(
          <div className="grid-x align-center grid-margin-y">
            <div className="cell medium-10 cocktail-show-tile">
              <div className="grid-x align-center grid-margin-y">
                {reviews}
              </div>
            </div>
          </div>
        ) 
      }
    }
    let newForm =()=>{
      if (this.props.signedIn.bool) { return <NewReviewTile key={`NRT_${this.props.cocktailId}`} cocktailId={this.props.cocktailId} handleSubmit={this.handleSubmit} />}
    }
    return (
      <div className="reviews-container">
        {container()}
        {newForm()}
      </div>
    )
  }
}

export default ReviewsContainer;
