/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import {VictoryComponentBoilerplate} from "../src/index";

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <VictoryComponentBoilerplate />
      </div>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
