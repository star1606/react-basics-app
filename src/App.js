import React, { Component } from "react";

import "./App.css";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "RYU", age: 30, belt: "black", id: 1 },
      { name: "LEE", age: 27, belt: "white", id: 2 },
      { name: "Park", age: 22, belt: "orange", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random(); // 유니크키로 만들어놓기 위해
    let ninjas = [...this.state.ninjas, ninja]; // 스프레드 연산자로 새로운 배열을 만든다.
    // ninjas 객체를 카피한 것이다
    this.setState({
      ninjas: ninjas,
    });
  };

  // id를 찾아서 닌자 삭제할 것이다
  // props로 보냄
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
      // ninja.id === id 인놈은 출력이 안될 것이다 범인은 죽음
    });
    //state를 set해줌
    this.setState({
      ninjas: ninjas,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Basics</h1>
        <p> Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
