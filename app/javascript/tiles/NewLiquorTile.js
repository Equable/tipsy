import React, { Component } from "react";

class NewLiquorTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      brand:"",
      proof:"",
      made_at:"",
      spirit:"",
      spirit_subtype_id:"",
      subtypes:[],
      spirits:[],
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.createLiquor = this.createLiquor.bind(this)
    this.fetchLiquorSubtypes = this.fetchLiquorSubtypes.bind(this)
    this.fetchSpirits = this.fetchSpirits.bind(this)
    this.handleSpiritChange = this.handleSpiritChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSpiritChange(event){
    this.fetchLiquorSubtypes(event.target.value)
  }

  fetchLiquorSubtypes(id){
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
        this.setState({subtypes: body, spirit: id})
      })
  }

  handleSubmit(event){
    event.preventDefault()
    let liquor = {name: this.state.name, brand: this.state.brand, proof: this.state.proof, made_at: this.state.made_at, spirit_subtype_id: this.state.spirit_subtype_id}
    this.createLiquor(liquor)
  }

  createLiquor(liquor){
    fetch(`/api/v1/liquor`, {
      method: 'POST',
      body: JSON.stringify({ liquor: liquor }),
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
        
      })

  }

  componentDidMount(){
    this.fetchSpirits()
  }
  render() {
    let spiritOptions = this.state.spirits.map((spirit)=>{
      return <option value={`${spirit.id}`}>{spirit.name}</option>
    })
    let subtypeOptions = this.state.subtypes.map((subtype) => {
      return <option value={`${subtype.id}`}>{subtype.name}</option>
    })
    return (
      <div className="cell" style={{background: 'white'}}>
        <form  autocomplete="new-password" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            brand:
            <input name="brand" type="text" value={this.state.image_url} onChange={this.handleChange} />
          </label>
          <label>
            Proof:
            <input name="proof" type="text" value={this.state.directions} onChange={this.handleChange} />
          </label>
          <label>
            Made At:
            <input name="made_at" type="text" value={this.state.directions} onChange={this.handleChange} />
          </label>
          <label>
            Spirit
            <select name="spirit" value={this.state.spirit} onChange={this.handleSpiritChange}>
              {spiritOptions}
            </select>
          </label>
          <label>
            Subtype:
            <select name="spirit_subtype_id" value={this.state.subtype} onChange={this.handleChange}>
              {subtypeOptions}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default NewLiquorTile;
