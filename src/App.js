import React, { Component } from "react";

import "./App.css";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "RYU", age: 30, belt: "black", id: 1 },
      { name: "LEE", age: 27, belt: "white", id: 2 },
      { name: "Park", age: 22, belt: "orange", id: 3 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>React Basics</h1>
        <p> Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
