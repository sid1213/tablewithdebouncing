import { PureComponent } from "react";

class Child extends PureComponent {
  constructor(props) {
    super();
    console.log(props.name);
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("I'm child component");
    return (
      <div>
        <h1> THis is child component</h1>
        <h3>Count {this.state.count}</h3>
      </div>
    );
  }
}
export default Child;
