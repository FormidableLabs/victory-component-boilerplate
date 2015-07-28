import React from "react";
import Radium from "radium";

const styles = {
  base: {
    color: "#000",
    fontSize: 12
  },
  red: {
    color: "#d71920",
    fontSize: 30
  }
};

@Radium
class BoilerplateComponent extends React.Component {
  getStyles() {
    if (this.props.color === "red") {
      return styles.red;
    } else {
      return styles.base;
    }
  }

  render() {
    return (
      <div style={this.getStyles()}>
        Edit me!
      </div>
    );
  }
}

BoilerplateComponent.propTypes = {
  color: React.PropTypes.string
};

export default BoilerplateComponent;
