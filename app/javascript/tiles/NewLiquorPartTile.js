import React, { Component } from "react";
import NewLiquorPartDatalistInputTile from './NewLiquorPartDatalistInputTile'
class NewLiquorPartTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount:1,
      spirit_id: "4",
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
    this.setState({name: "", brand:""})
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
      <div className="liquorPartTile">
        <div className="grid-x align-center grid-margin-y">
          <div className="cell medium-4 cocktail-show-tile">
            <form onSubmit={this.handleSubmit}>
              <div className="grid-x grid-margin-x">
                <div className="cell text-center">
                  <h4>Add Liquor</h4>
                </div>
                <div className="cell medium-6">
                  <label>
                    Spirit:
                      <select name="spirit_id" value={this.state.spirit_id} onChange={this.handleSpiritChange}>
                      {options}
                    </select>
                  </label>
                </div>
                <div className="cell medium-6">
                  <label>
                    Subtype:
                    <select name="spirit_subtype_id" value={this.state.subtype} onChange={this.handleChange}>
                      <option value=""></option>
                      {subtypeOptions}
                    </select>
                  </label>
                </div>
                <NewLiquorPartDatalistInputTile subtype={this.state.spirit_subtype_id} onChange={this.handleChange} name={this.state.name} spirit={this.state.spirit_id}/>
                <div className="cell medium-4">
                  <label>
                    Brand:
                    <input name="brand" type="text" placeholder="Any (optional)" value={this.state.brand} onChange={this.handleChange} />
                  </label>
                </div>
                <div className="cell medium-2">
                  <label>
                    Oz:
                  <input name="amount" type="number" placeholder="2" value={this.state.amount} onChange={this.handleChange} />
                  </label>
                </div>
                <div className="cell text-center">
                  <input className="button" type="submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default NewLiquorPartTile;
