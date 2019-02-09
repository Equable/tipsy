import React, { Component } from "react";

class NewLiquorPartTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      spirit_id: "",
      spirits: [],
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchSpirits = this.fetchSpirits.bind(this)
    this.createSubtype = this.createSubtype.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  fetchSpirits() {
    fetch("/api/v1/spirit_subtype/new")
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
        this.setState({ spirits: body })
      })
  }
  
  fetchLiquorSubtypes(id) {
    fetch(`/api/v1/liquor/${id}/spirit_subtypes`)
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
        this.setState({ subtypes: body, spirit: id })
      })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  componentDidMount() {
    this.fetchSpirits()
  }
  render() {
    let options = this.state.spirits.map((spirit) => {
      return <option value={`${spirit.id}`}>{spirit.name}</option>
    })
    return (
      <div className="cell" style={{ background: 'white' }}>
        <form autoComplete="new-password" onSubmit={this.handleSubmit}>
          <label>
            Spirit:
              <select name="spirit_id" value={this.state.spirit_id} onChange={this.handleChange}>
              {options}
            </select>
          </label>
          <label>
            Name:
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default NewLiquorPartTile;
