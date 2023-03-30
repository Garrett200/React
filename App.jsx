import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'
import React, { useState } from 'react';

function App() {
  
  // showModal gives the current state and setShowModal will be the function
  const  [showModal, setShowModal] = useState(false)

  return (
    <div className="App">
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified" 
        />
        <Todo
          title="Finish Interview Section"
        />
        <Todo
          title="Land a Job"
        />

      </div>
      {showModal && <Modal title="Are you sure?" />}
    </div>
  );
}

export default App;
