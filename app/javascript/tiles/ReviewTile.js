import React, { Component } from "react";

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditReviewTile from "./EditReviewTile";

class ReviewTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      rating:"",
      body:"",
      location:{location: "", id: null},
      edit:false,
    };
    this.edit=this.edit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.fetchEdit = this.fetchEdit.bind(this)
  }

  fetchEdit(review){
    let user_id = this.props.review.user.user_id
    fetch(`/api/v1/cocktail_review/${this.props.review.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ review: review, user_id: user_id, location: review.location }),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
          throw (error)
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ edit:false, body: body.body, rating: body.rating, location: body.location })
      })
  }
  handleEdit(review){
    this.fetchEdit(review)
  }
  edit(){
    this.setState({edit:true})
  }
  componentDidMount(){
    this.setState({username: this.props.review.user.name, rating: this.props.review.rating, body: this.props.review.body, location: this.props.review.location || ""})
  }
  render(){
    let ratingStars=[
      <FontAwesomeIcon key={`R1_${this.state.username}`} icon={faStar} />,
      <FontAwesomeIcon key={`R2_${this.state.username}`} icon={faStar} />,
      <FontAwesomeIcon key={`R3_${this.state.username}`} icon={faStar} />,
      <FontAwesomeIcon key={`R4_${this.state.username}`} icon={faStar} />,
      <FontAwesomeIcon key={`R5_${this.state.username}`} icon={faStar} />
    ]
    let deleteReview = ()=>{
      this.props.deleteReview(this.props.review.id)
    }
    let buttons=()=>{
      if(this.props.buttons){
        return(
          <div className="cell">
            <input className="edit button" type="submit" value="Edit" onClick={this.edit}/>
            <input className="delete button" type="submit" value="Delete" onClick={deleteReview} />
          </div>
        )
      }
    }
    let location=()=>{
        if (this.state.location.location !== "") {
          return (
            <div className="cell">
              <h6>{this.state.location.location}</h6>
            </div>
          )
        }
    }
    let views=()=>{
      if(this.state.edit){
        return <EditReviewTile handleSubmit={this.handleEdit} username={this.state.username} location={this.state.location.location} rating={this.state.rating} body={this.state.body}/>
      }else{
        return(
        <div className="cell medium-8 review-tile">
          <div className="grid-x grid-padding-y">
            <div className="cell">
              <h6>{this.state.username}</h6>
            </div>
            {location()}
            <div className="cell">
              <span className="stars">{ratingStars.slice(0, this.state.rating)}</span>
            </div>
            <div className="cell">
              <p>{this.state.body}</p>
            </div>
            {buttons()}
          </div>
        </div>
        )
      }
    }
    return(
      <div>
        {views()}
      </div>
    )
  }
}
export default ReviewTile