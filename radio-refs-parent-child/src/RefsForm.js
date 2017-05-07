import React, { Component } from 'react';

class RefsForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    //  extract the node list from the form
    //  it looks like an array, but lacks array methods
    const { pet } = this.form;

    // a set of radios only has one value
    console.log(pet, pet.value);
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          ref={form => this.form = form}>
          <RadioSet
            setName={'pet'}
            setOptions={['cat', 'dog', 'ferret']} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function RadioSet(props) {
  return (
    <div>
      {props.setOptions.map(option => {
        return (
          <label key={option} style={{textTransform: 'capitalize'}}>
            {option}
            <input type="radio" value={option} name={props.setName} />
          </label>
        )
      })}
    </div>
  );
}

export default RefsForm;
