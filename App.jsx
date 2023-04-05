import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'
import Counter from './components/Counter.jsx'
import React, { useState } from 'react';

function App() {
  var [showTodo, setShowTodo] = useState(true)
  const [showModal, setShowModal] = useState(false)

  function deleteTodo() {
    setShowModal(true)
  }

  function modalConfirm() {
    setShowModal(false)
    setShowTodo((prevTodoArr) => prevTodoArr - showTodo)
  }

  function modalCancel() {
    setShowModal(false)
  }

  // showModal gives the current state and setShowModal will be the function

  return (
    <div className="App">
      <Title />
      <div className="input__wrapper">
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        {showTodo &&
          <Todo
            deleteTodo={deleteTodo}
            title="Finish Frontend Simplified"
          />
        }
        {showTodo &&
          <Todo
            deleteTodo={deleteTodo}
            title="Finish Interview Section"
          />
        }
        {showTodo &&
          <Todo
            deleteTodo={deleteTodo}
            title="Land a Job"
          />
        }

      </div>
      {showModal &&
        <Modal
          modalConfirm={modalConfirm}
          modalCancel={modalCancel}
          title="Are you sure?"
        />}
    </div>
  );
}

export default App;
