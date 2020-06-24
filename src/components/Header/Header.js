import React, { Component } from "react";
import "./Header.css";
import moment from "moment";

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="row">
          <div className="col-9">
            <h1 className="todo-title">To do list</h1>
            <p className="sub">{moment().format("dddd, Do [de] MMMM")}</p>
          </div>
          <div className="col-3 d-flex justify-content-end p-0">
            <img
              src="https://lh3.googleusercontent.com/ogw/ADGmqu_W3AgLu4Jg7ylzGkyvh_Zvtg78nGK7AmtDfLzj=s64-c-mo"
              className="img-profile"
              alt="profile"
            />
          </div>
        </div>
      </header>
    );
  }
}
