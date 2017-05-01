import React, { Component } from 'react';

class ControlledCompExample extends Component {
  constructor() {
    super();
    this.state = {
      fullName: ''
    }
  }
  handleFullNameChange = (e) => {
    this.setState({
      fullName: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();

    // node list looks like an array, but lacks array methods
    const { pet } = this.form

    // a set of radio can only have one value
    console.log(pet, pet.value)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.handleFullNameChange}
              name="fullName" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ControlledCompExample;
