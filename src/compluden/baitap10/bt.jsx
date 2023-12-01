import React, { Component } from "react";

export default class bt extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      showTitle: "",
    };
  }
  showTextshoww = () => {
    this.setState({
      showTitle: this.state.title,
    });
  };
  render() {
    return (
      <>
        <textarea
          name=""
          id=""
          cols="50"
          rows="40"
        ></textarea>
        <button onClick={this.showTextshoww}>click</button>
        <p>{this.state.showTitle}</p>
      </>
    );
  }
}
