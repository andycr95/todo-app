import React, { Component } from "react";
import axios from "axios";
import { Modal, Button, Spinner } from "react-bootstrap";
import CreateForm from "../Forms/CreateForm";
import AddTimeForm from "../Forms/AddTimeForm";
import Detail from "../Detail/Detail";

export default class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: "",
      time_worked: 0,
      estimated_time: 0,
      loading: false,
      api: "http://192.241.155.75:5000/api/",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddTime = this.handleAddTime.bind(this);
  }

  // Inputs changes
  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  // Send information to server to create a TODO
  async handleSubmit(e) {
    this.setState({ loading: true });
    e.preventDefault();
    await axios.post(`${this.state.api}todos`, this.state).then((res) => {
      if (res.status === 201) {
        this.props.addTodo(res.data.todo);
      } else {
        window.alert(res.data.message);
      }
      this.setState({ loading: false });
      this.props.handleClose();
    });
  }

  // Send information to server to update a TODO "time_worked"
  async handleAddTime(e) {
    this.setState({ loading: true });
    e.preventDefault();
    await axios
      .put(`${this.state.api}/todos/${this.props.todo._id}/updatetime`, {
        time: this.state.time_worked,
      })
      .then((res) => {
        if (res.status === 200) {
          this.props.updateTodo(res.data.todo, this.props.index);
        } else {
          window.alert(res.data.message);
        }
        this.setState({ loading: false });
        this.props.handleClose();
      });
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.type === "addTime" ? (
            <AddTimeForm
              onsubmit={this.handleAddTime}
              oninput={this.handleInput}
              todo={this.props.todo}
            />
          ) : this.props.type === "seeTodo" ? (
            <Detail todo={this.props.todo} />
          ) : (
            <CreateForm
              onsubmit={this.handleSubmit}
              oninput={this.handleInput}
              users={this.props.users}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.handleClose}>
            Cancelar
          </Button>
          {this.props.type !== "seeTodo" ? (
            this.props.type !== "showtodo" ? (
              <Button
                disabled={this.state.loading}
                variant="success"
                onClick={
                  this.props.type !== "addTime"
                    ? this.handleSubmit
                    : this.handleAddTime
                }
              >
                {this.state.loading ? (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                  ></Spinner>
                ) : (
                  ""
                )}
                Guardar
              </Button>
            ) : null
          ) : null}
        </Modal.Footer>
      </Modal>
    );
  }
}
