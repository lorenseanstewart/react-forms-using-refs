import React, { Component } from 'react';

class RefsForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    // node list looks like an array, but lacks array methods
    const { pet } = this.form

    // convert node list to an array
    const checkboxArray = Array.prototype.slice.call(pet);

    // extract only the checked checkboxes
    const checkedCheckboxes = checkboxArray.filter(input => input.checked)
    console.log('checked array:', checkedCheckboxes)

    // use .map() to extract the value from each checked checkbox
    console.log('checked array values:', checkedCheckboxes.map(input => input.value))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref={form => this.form = form}>
          <label>
            Cat
            <input type="checkbox" value="cat" name="pet" />
          </label>
          <label>
            Dog
            <input type="checkbox" value="dog" name="pet" />
          </label>
          <label>
            Ferret
            <input type="checkbox" value="ferret" name="pet" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RefsForm;
