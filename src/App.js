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
  closedHandler = () => {
    this.setState({
      showSidebar: false,
    });
  };
  render() {
    return (
      <div className="App">
        <Sidebar open={this.state.showSidebar} closed={this.closedHandler} />
        <Home clicked={this.toggleHandler} />
      </div>
    );
  }
}

export default App;
