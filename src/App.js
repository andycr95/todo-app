import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import CardTask from "./components/CardTask/CardTask";
import ModalForm from "./components/ModalForm/ModalForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState({});
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [key, setKey] = useState();
  const [title, setTitle] = useState(false);
  const [type, setType] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = ({ e, todo, i, t }) => {
    setType(e.target.id);
    setShow(true);
    setKey(i);
    setTask(todo);
    setTitle(t);
  };

  // Fecth of TODOS and USERS
  useEffect(() => {
    let api = "http://192.241.155.75:5000/api/";
    axios.get(`${api}todos`).then((res) => {
      setTodos(res.data);
    });
    axios.get(`${api}users`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  //Method to open modal
  const setTodo = (e) => {
    let t = "Crear un tarea";
    handleShow({ e, t });
  };

  // Add new TODO to state
  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Add TODO updated to state
  const handleUpdateTodo = (todo, i) => {
    const newTodos = [...todos];
    newTodos[i] = todo;
    setTodos(newTodos);
  };

  // Remove TODO deleted to state
  const handleDeleteTodo = (e, todo, i) => {
    e.preventDefault();
    var c = window.confirm("Desea eliminar esta tarea?");
    if (c) {
      const newTodos = [...todos];
      axios
        .delete(`http://192.241.155.75:5000/api/todos/${todo._id}`)
        .then((res) => {
          if (res.status === 200) {
            newTodos.splice(i, 1);
            setTodos(newTodos);
          } else {
            window.alert(res.data.message);
          }
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="container pt-4">
        <div className="d-flex">
          <h4 className="task-title">Tareas</h4>
          <span className="task-subtitle">({todos.length} asignadas)</span>
        </div>
        <div className="row">
          {todos.map((todo, index) => (
            <CardTask
              key={index.toString()}
              onclick={handleShow}
              onSetTodo={setTask}
              onDelete={handleDeleteTodo}
              index={index}
              todo={todo}
            />
          ))}
        </div>
      </div>
      <button className="btn fab" onClick={setTodo}>
        <span>+</span>
      </button>
      <ModalForm
        handleClose={handleClose}
        users={users}
        addTodo={handleAddTodo}
        updateTodo={handleUpdateTodo}
        show={show}
        todo={task}
        type={type}
        index={key}
        title={title}
      />
    </div>
  );
}

export default App;
