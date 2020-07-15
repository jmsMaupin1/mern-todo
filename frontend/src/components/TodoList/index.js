import React from 'react'
import TodoItem from '../TodoItem';

export default function TodoList({toggleCompleted, deleteTodo, todos}) {
    return (
    <section className="main">
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem 
              toggleCompleted={toggleCompleted} 
              key={index}
              id={index}
              name={todo.name} 
              completed={todo.completed}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
    </section>
    )
}
