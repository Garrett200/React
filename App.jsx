import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div className="App">
      <Title />
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified"
          paragraph="Code every day for at least 30 minutes."  
        />
        <Todo
          title="Finish Interview Section"
          paragraph="Get it done by April."  
        />
        <Todo
          title="Land a Job"
          paragraph="Make at least 80k."
        />

      </div>

    </div>
  );
}

export default App;
