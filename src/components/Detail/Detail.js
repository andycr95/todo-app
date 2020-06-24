import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label>Titulo</label>
          <input
            disabled
            value={this.props.todo.title}
            type="text"
            name="title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Tiempo trabajado</label>
          <input
            type="number"
            name="time_worked"
            disabled
            value={this.props.todo.time_worked}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Tiempo estimado</label>
          <input
            type="number"
            name="estimated_time"
            disabled
            value={this.props.todo.estimated_time}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            className="form-control"
            name="description"
            disabled
            value={this.props.todo.description}
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Responsable</label>
          <select className="form-control" disabled name="user_id">
            <option value="#">{this.props.todo.responsable}</option>
          </select>
        </div>
      </div>
    );
  }
}
