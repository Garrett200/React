import './Todo.css'

function Todo({ title, deleteTodo }) {
    return <div className='todo'>
                <p>{title}</p>
                <button onClick={deleteTodo}>Done</button>
            </div>
}

export default Todo;