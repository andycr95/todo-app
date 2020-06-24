import React, { Component } from "react";

export default class AddTimeForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onsubmit}>
        <h5>Time worked: {this.props.todo.time_worked}</h5>
        <div className="form-group">
          <label>Time</label>
          <input
            type="number"
            name="time_worked"
            onChange={this.props.oninput}
            className="form-control"
          />
        </div>
      </form>
    );
  }
}
