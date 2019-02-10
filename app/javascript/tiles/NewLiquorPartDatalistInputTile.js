import React, { Component } from "react";

class NewLiquorPartDatalistInputTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liquors:[],
      name:"",
    };
    this.fetchLiquors = this.fetchLiquors.bind(this)
  }

  fetchLiquors(name){
    fetch('/api/v1/datalist/liquors', {
      method: 'POST',
      body: JSON.stringify({ liquor: {name: name, subtype: this.props.subtype} }),
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
        this.setState({liquors:body})
      })
  }

  render(){
    let options = this.state.liquors.map((liquor)=>{
      return <option key={liquor.id} value={liquor.name}/>
    })

    let handleChange=(event)=>{
      this.fetchLiquors(event.target.value)
      this.props.onChange(event)
    }
    return (
      <div className="cell medium-5">
        <label>
          Name:
        <input name="name" list="data" placeholder="Old No. 7" type="text" value={this.props.name} onChange={handleChange} />
        <datalist id="data">
          {options}
        </datalist>
        </label>
      </div>       
              
    );
  }
};

export default NewLiquorPartDatalistInputTile;
