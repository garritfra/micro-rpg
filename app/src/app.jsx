import React from "react";
import ReactDOM from "react-dom";
import request from "request";

class App extends React.Component {
  render() {
    request("http://inventory:8080/", (err, res, body) => {
      console.log(body);
    });
    return <h1>Hello Frontend</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
