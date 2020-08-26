import React, { Component } from "react";

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state); //여기서 props로 보낸 addNinja() 함수를받음.
    // addNinja에 state를 담는다.
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input type="text" id="name" onChange={this.handleChange} />
        <label htmlFor="age">Age :</label>
        <input type="text" id="age" onChange={this.handleChange} />
        <label htmlFor="belt">Belt :</label>
        <input type="text" id="belt" onChange={this.handleChange} />
        <button>제출</button>
      </form>
    );
  }
}

export default AddNinja;
