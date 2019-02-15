import React, { Component } from "react";
import ReactStars from 'react-stars'

class EditReviewTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3,
      location: "",
      body: "",
    };
    this.ratingChange = this.ratingChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  ratingChange(newRating) {
    this.setState({ rating: newRating })
  }

  componentDidMount() {
    this.setState({ rating: this.props.rating, body: this.props.body, location: this.props.location})
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    let handleSubmit = (event) => {
      event.preventDefault();
      this.props.handleSubmit(this.state)
    }
    return (
      <div className="new-review-tile">
        <div className="grid-x align-center grid-margin-y">
          <div className="cell cocktail-show-tile">
            <form onSubmit={handleSubmit}>
              <div className="grid-x grid-margin-x cocktail-show-tile">
                <div className="cell text-center">
                  <h1>Edit Review</h1>
                </div>
                <div className="cell medium-3">
                  <div className="grid-y grid-margin-y">
                    <div className="cell">
                      <label>
                        Rating:
                          <ReactStars
                          count={5}
                          size={25}
                          color1={'white'}
                          color2={'#C8B13A'}
                          half={false}
                          value={this.state.rating}
                          onChange={this.ratingChange}
                        />
                      </label>
                    </div>
                    <div className="cell">
                      <label>
                        Location:
                        <input type="text" name="location" placeholder="optional" onChange={this.handleChange} value={this.state.location} />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="cell medium-9">
                  <label>
                    Review:
                    <textarea name="body" onChange={this.handleChange} value={this.state.body} />
                  </label>
                </div>
                <div className="cell text-center">
                  <input className="button" type="submit" value="Add Review" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default EditReviewTile;
