import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  componentDidMount() {}
  componentDidUpdate(a, b) {
    console.log(a, b);
  }
  render() {
    console.log("render parent");
    return (
      <div>
        <h1>THis is Parent component</h1>
        <h3>Counter {this.state.count}</h3>
        <Child />
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          CLick herer
        </button>
      </div>
    );
  }
}

export default Parent;
