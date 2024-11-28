import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        setTodos(data);
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="todos-container">
            <h1 className="todos-title">Страница задач</h1>
            <div className="todos-grid">
                {todos.map((todo) => (
                    <Link to={`/todositem/${todo.id}`} className="todo-card" key={todo.id}>
                        <h2 className="todo-title">Задача №{todo.id}</h2>
                        <p className="todo-body">{todo.title}</p>
                        
                        <div className="todo-meta">
                            <p><strong>ID:</strong> {todo.id}</p>
                            <p><strong>User ID:</strong> {todo.userId}</p>
                            <p><strong>Title:</strong> {todo.title}</p>
                            <p><strong>Completed:</strong> {todo.completed ? 'Да' : 'Нет'}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Todos;
