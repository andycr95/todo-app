import React, { Component } from "react";
import "./CardTask.css";

export default class CardTask extends Component {
  //Method to open modal and inject props
  setTodo = (e) => {
    let t = "Agregar tiempo de trabajo";
    this.props.onclick({
      e,
      todo: this.props.todo,
      i: this.props.index,
      t,
    });
  };

  //Method to open modal and inject props
  seeTodo = (e) => {
    this.props.onclick({
      e,
      todo: this.props.todo,
      i: this.props.index,
      t: this.props.todo.title,
    });
  };

  //Method to remove the TODO using props
  deleteTodo = (e) => {
    this.props.onDelete(e, this.props.todo, this.props.index);
  };

  render() {
    return (
      <div className="col-sm-12 col-md-12 col-lg-6 p-0">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            {this.props.todo.state === true ? (
              <h5 className="card-header-active">Activa</h5>
            ) : (
              <h5 className="card-header-desactive">Finalizada</h5>
            )}
            <div className="float-right">
              <button
                onClick={this.setTodo}
                type="button"
                id="addTime"
                disabled={!this.props.todo.state}
                className="btn btn-head"
              >
                Agregar tiempo
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <img
                  className="card-img-profile"
                  src="https://lh3.googleusercontent.com/ogw/ADGmqu_W3AgLu4Jg7ylzGkyvh_Zvtg78nGK7AmtDfLzj=s64-c-mo"
                  alt="img-profile"
                />
                <span className="card-user">{this.props.todo.responsable}</span>
              </div>
              <div className="col-6 p-0">
                <i className="far fa-clock icon-clock" aria-hidden="true"></i>
                <span className="card-time">
                  Tiempo restante:{" "}
                  {this.props.todo.estimated_time - this.props.todo.time_worked}{" "}
                  hrs
                </span>
              </div>
            </div>
            <div className="card-body-content">
              <div className="d-flex justify-content-between">
                <h6 className="card-body-content-title">
                  {this.props.todo.title}
                </h6>
                <div className="dropdown dropleft">
                  <button
                    className="btn"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      className="fas fa-ellipsis-v elp-card"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <button
                      onClick={this.seeTodo}
                      type="button"
                      className="dropdown-item"
                    >
                      <i className="fas fa-eye see" aria-hidden="true"></i>
                      <span id="seeTodo" className="dropdown-opt">
                        Ver tarea
                      </span>
                    </button>
                    <button onClick={this.deleteTodo} className="dropdown-item">
                      <i className="fas fa-trash delete" aria-hidden="true"></i>
                      <span className="dropdown-opt trash-opt">Borrar</span>
                    </button>
                  </div>
                </div>
              </div>
              <p className="card-body-content-desc">
                {this.props.todo.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
