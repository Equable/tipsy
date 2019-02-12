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
      <div className="otherIngredientTile">
        <div className="grid-x align-center grid-margin-y">
          <div className="cell medium-4 cocktail-show-tile">
            <form onSubmit={addIngredient}>
              <div className="grid-container">
                <div className="grid-x grid-margin-x align-center">
                  <div className="cell text-center">
                    <h4>Add Other</h4>
                  </div>
                  <div className="cell medium-3">
                    <label>
                      Amount:
                      <input name="amount" type="number" placeholder="1" value={this.state.amount} onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="cell medium-3">
                    <label>
                      Units:
                      <input name="unit" type="text" placeholder="splash" value={this.state.unit} onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="cell medium-6">
                    <label>
                      Name:
                      <input name="name" type="text" placeholder="Simple Syrup" value={this.state.name} onChange={this.handleChange} />
                    </label>
                  </div>
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

export default NewOtherIngredientsTile;
