import React, { Component } from "react";

export default class CreateForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onsubmit}>
        <div className="form-group">
          <label>Titulo</label>
          <input
            type="text"
            name="title"
            onChange={this.props.oninput}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Tiempo estimado</label>
          <input
            type="number"
            name="estimated_time"
            onChange={this.props.oninput}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            className="form-control"
            name="description"
            onChange={this.props.oninput}
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Responsable</label>
          <select
            className="form-control"
            onChange={this.props.oninput}
            name="user_id"
          >
            <option value="#">Seleccione una opción</option>
            {this.props.users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    );
  }
}
