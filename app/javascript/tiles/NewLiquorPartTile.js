import React, { Component } from "react";

class NewLiquorPartTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      spirit_id: "",
      spirits: [],
      subtypes:[],
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchSpirits = this.fetchSpirits.bind(this)
    this.handleSpiritChange = this.handleSpiritChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSpiritChange(event) {
    this.fetchLiquorSubtypes(event.target.value)
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
        this.setState({ subtypes: body, spirit_id: id })
      })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  addLiquorPart(){
    let id= this.props.match.params.id
    fetch(`/api/v1/liquor/${id}`)
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
        this.setState({ subtypes: body, spirit_id: id })
      })

  }
  componentDidMount() {
    this.fetchSpirits()
  }
  render() {
    let options = this.state.spirits.map((spirit) => {
      return <option value={`${spirit.id}`}>{spirit.name}</option>
    })
    let subtypeOptions = this.state.subtypes.map((subtype) => {
      return <option value={`${subtype.id}`}>{subtype.name}</option>
    })
    return (
      <div className="cell small-12 medium-8" style={{ background: 'white', padding: '10px' }}>
        <form autoComplete="new-password" onSubmit={this.handleSubmit}>
          <div className="grid-container">
            <div className="grid-x grid-margin-x align-center">
              <div className="cell medium-2">
                <label>
                  Spirit:
                    <select name="spirit_id" value={this.state.spirit_id} onChange={this.handleSpiritChange}>
                    {options}
                  </select>
                </label>
              </div>
              <div className="cell medium-3">
                <label>
                  Subtype:
                  <select name="spirit_subtype_id" value={this.state.subtype} onChange={this.handleChange}>
                    {subtypeOptions}
                  </select>
                </label>
              </div>
              <div className="cell medium-5">
                <label>
                  Name:
                  <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
              </div>
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default NewLiquorPartTile;
