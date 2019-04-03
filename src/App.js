import React, { Component } from "react";
import "./App.css";
import "./Travel.css";

import TravelsArray from "./TravelsArray.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <TravelsArray/>

      </div>
    );
  }
}

export default App;