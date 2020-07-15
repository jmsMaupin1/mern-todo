import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import TodoList from "../../components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const listTodos = () => {
    fetch("http://localhost:8000/todos")
      .then((res) => res.json())
      .then(setTodos);
  };

  const createTodo = (todo) => {
    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...todos, data]);
      });
  };

  const updateTodo = (id, todo) => {
    fetch(`http://localhost:8000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(
          todos.map((todo) => {
            if (todo._id === data._id) return data;
            else return todo;
          })
        );
      });
  };

  const deleteTodo = (id) => {
    let { _id } = todos[id];
    fetch(`http://localhost:8000/todos/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(todos.filter((todo) => todo._id !== data._id));
      });
  };

  const toggleCompleted = (index) => {
    let todo = todos[index];
    todo.completed = !todo.completed;
    updateTodo(todo._id, todo);
  };

  useEffect(() => {
    listTodos();
  }, []);

  return (
    <>
      <Header onTodoSubmit={createTodo} />
      <TodoList
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
