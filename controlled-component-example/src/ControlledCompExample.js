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
    console.log(this.state.fullName)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Full Name</label>
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.handleFullNameChange}
              name="fullName" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ControlledCompExample;
