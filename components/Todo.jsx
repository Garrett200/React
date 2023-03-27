import './Todo.css'

function Todo({ title, paragraph }) {
    return <div className='todo'>
                <h2>{title}</h2>
                <p>{paragraph}</p>
                <button className="delete">Done</button>
            </div>
}

export default Todo;