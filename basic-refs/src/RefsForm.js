import React, { Component } from 'react';

class RefsForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      fullName: this.fullName.value,
      petType: this.petType.value
    };
    console.log(payload);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fullname">Name</label>
          <input
            ref={input => this.fullName = input}
            type="text"
            name="fullname"
            placeholder="Full Name"/>
          <label htmlFor="petType">Pet Type</label>
          <select
            ref={select => this.petType = select}
            name="petType">
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="ferret">Ferret</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RefsForm;
