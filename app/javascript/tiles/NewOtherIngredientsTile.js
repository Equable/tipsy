import React, { Component } from "react";

class NewOtherIngredientsTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      unit: "",
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.name]:event.target.value})
  }

  render() {
    let addIngredient=(event)=>{
      event.preventDefault()
      this.props.addIngredient(this.state)
    }
    return (
      <div className="cell small-12 medium-8" style={{ background: 'white', padding: '10px'}}>
        <form onSubmit={addIngredient}>
          <div className="grid-container">
            <div className="grid-x grid-margin-x align-center">
              <div className="cell medium-2">
                <label>
                  Amount:
                  <input name="amount" type="number" placeholder="1" value={this.state.amount} onChange={this.handleChange} />
                </label>
              </div>
              <div className="cell medium-2">
                <label>
                  Units:
                  <input name="unit" type="text" placeholder="splash" value={this.state.unit} onChange={this.handleChange} />
                </label>
              </div>
              <div className="cell medium-5">
                <label>
                  Name:
                  <input name="name" type="text" placeholder="Simple Syrup" value={this.state.name} onChange={this.handleChange} />
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

export default NewOtherIngredientsTile;
