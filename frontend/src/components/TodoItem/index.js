import React from 'react'

export default function TodoItem({completed, toggleCompleted, deleteTodo, name, id}) {
    return (
    <li className={completed ? "completed" : ""}>
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={toggleCompleted.bind(this, id)}
            />
            <label>{name}</label>
            <button className="destroy" onClick={deleteTodo.bind(this, id)}/>
        </div>
    </li>
    )
}
