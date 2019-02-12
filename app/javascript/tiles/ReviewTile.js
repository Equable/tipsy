import React from 'react'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReviewTile = props =>{
  let ratingStars=[
    <FontAwesomeIcon key={`R1_${props.review.user.name}`} icon={faStar} />,
    <FontAwesomeIcon key={`R2_${props.review.user.name}`} icon={faStar} />,
    <FontAwesomeIcon key={`R3_${props.review.user.name}`} icon={faStar} />,
    <FontAwesomeIcon key={`R4_${props.review.user.name}`} icon={faStar} />,
    <FontAwesomeIcon key={`R5_${props.review.user.name}`} icon={faStar} />
  ]
  let deleteReview = ()=>{
    props.deleteReview(props.review.id)
  }
  let buttons=()=>{
    if(props.buttons){
      return(
        <div className="cell">
          <input className="edit button" type="submit" value="Edit" />
          <input className="delete button" type="submit" value="Delete" onClick={deleteReview} />
        </div>
      )
    }
  }
  return(
    <div className="cell medium-8 review-tile">
      <div className="grid-x grid-padding-y">
        <div className="cell">
          <h6>{props.review.user.name}</h6>
        </div>
        <div className="cell">
          <span className="stars">{ratingStars.slice(0,props.review.rating)}</span>
        </div>
        <div className="cell">
          <p>{props.review.body}</p>
        </div>
        {buttons()}
      </div>
    </div>
  )
}
export default ReviewTile