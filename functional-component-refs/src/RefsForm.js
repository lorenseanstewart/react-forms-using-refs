import React, { Component } from 'react';

class RefsForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('first name:', this.firstName.value)
    this.firstName.value = 'Got ya!'
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <CustomInput firstName={input => this.firstName = input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function CustomInput(props) {
  return (
    <input type="text" ref={props.firstName}/>
  );
}

export default RefsForm;
