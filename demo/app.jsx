/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import {BoilerplateComponent} from "../src/index";

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <p>
          < BoilerplateComponent/>
        </p>
        <p>
          < BoilerplateComponent color={"red"}/>
        </p>
      </div>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
