import React, { Component } from "react";

class NewCocktailTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      image_url:"",
      directions:""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({[event.target.name]:event.target.value})
  }
  render(){
    let handleNewCocktail =(event)=>{
      event.preventDefault()
      let newCocktail = this.state
      this.props.handleSubmit(newCocktail)
    }
    return (
      <div className="cell" style={{ background: 'white' }}>
        <form onSubmit={handleNewCocktail}>
          <label>
            Name:
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Image URL:
            <input name="image_url" type="text" value={this.state.image_url} onChange={this.handleChange} />
          </label>
          <label>
            directions:
            <input name="directions" type="text" value={this.state.directions} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default NewCocktailTile;
