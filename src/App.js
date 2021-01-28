import React, { Component } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";

class App extends Component {
  state = {
    showSidebar: false,
  };
  toggleHandler = () => {
    this.setState((prev) => {
      return {
        showSidebar: !prev.showSidebar,
      };
    });
    console.log("Hello");
  };
  render() {
    return (
      <div className="App">
        <Sidebar open={this.state.showSidebar} />
        <Home clicked={this.toggleHandler} />
      </div>
    );
  }
}

export default App;
