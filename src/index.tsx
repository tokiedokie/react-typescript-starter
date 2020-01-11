import * as React from "react";
import * as ReactDOM from "react-dom";

interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);