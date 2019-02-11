import React, { Component } from "react";
import NewLiquorPartDatalistInputTile from './NewLiquorPartDatalistInputTile'
class NewLiquorPartTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount:1,
      spirit_id: "1",
      spirit_subtype_id:"",
      brand: "",
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
    let liquor = {name: this.state.name, brand: this.state.brand, subtype: this.state.spirit_subtype_id, amount: this.state.amount, spirit_id: this.state.spirit_id}
    this.props.addLiquorPart(liquor)
  }

  componentDidMount() {
    this.fetchSpirits()
  }
  render() {
    let options = this.state.spirits.map((spirit) => {
      return <option key={`SO_${spirit.id}`}value={`${spirit.id}`}>{spirit.name}</option>
    })
    let subtypeOptions = this.state.subtypes.map((subtype) => {
      return <option key={`SSTO_${subtype.id}`}value={`${subtype.id}`}>{subtype.name}</option>
    })
    return (
      <div className="cell small-12 medium-8" style={{ background: 'white', padding: '10px', textAlign: 'center' }}>
        <form onSubmit={this.handleSubmit}>
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
                    <option value="">Any</option>
                    {subtypeOptions}
                  </select>
                </label>
              </div>
              <div className="cell grid-x grid-margin-x align-center">
                <NewLiquorPartDatalistInputTile subtype={this.state.spirit_subtype_id} onChange={this.handleChange} name={this.state.name} spirit={this.state.spirit_id}/>
                <div className="cell medium-5">
                  <label>
                    Brand:
                    <input name="brand" type="text" placeholder="Any (optional)" value={this.state.brand} onChange={this.handleChange} />
                  </label>
                </div>
              </div>
              <div className="cell grid-x grid-margin-x align-center">
                <div className="cell medium-2">
                  <label>
                    Oz:
                    <input name="amount" type="number" placeholder="2" value={this.state.amount} onChange={this.handleChange} />
                  </label>
                </div>
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
