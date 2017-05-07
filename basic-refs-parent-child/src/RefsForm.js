import React, { Component } from 'react';

class RefsForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('first name:', this.firstName.value);
    this.firstName.value = 'Got ya!';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            label={'Name'}
            firstName={input => this.firstName = input} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function CustomInput(props) {
  return (
    <div>
      <label>{props.label}:</label>
      <input type="text" ref={props.firstName}/>
    </div>
  );
}

export default RefsForm;
