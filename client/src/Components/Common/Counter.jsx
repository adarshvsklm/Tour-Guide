import React from "react";
import ReactDOM from "react-dom";
import CounterInput from "react-counter-input";

class Counter extends React.Component {
  render() {
    return (
      <CounterInput
        min={0}
        max={10}
        onCountChange={count => console.log(count)}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
