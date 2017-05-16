import React, { Component } from "react";

class RefsForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    //  extract the node list from the form
    //  it looks like an array, but lacks array methods
    const { pet } = this.form;

    // convert node list to an array
    const checkboxArray = Array.prototype.slice.call(pet);

    // extract only the checked checkboxes
    const checkedCheckboxes = checkboxArray.filter(input => input.checked);
    console.log("checked array:", checkedCheckboxes);

    // use .map() to extract the value from each checked checkbox
    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);
    console.log("checked array values:", checkedCheckboxesValues);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref={form => (this.form = form)}>
          <CheckboxSet setName={"pet"} setOptions={["cat", "dog", "ferret"]} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function CheckboxSet(props) {
  return (
    <div>
      {props.setOptions.map(option => {
        return (
          <label key={option} style={{ textTransform: "capitalize" }}>
            {option}
            <input type="checkbox" value={option} name={props.setName} />
          </label>
        );
      })}
    </div>
  );
}

export default RefsForm;
