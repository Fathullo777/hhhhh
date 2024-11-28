import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TodosItem = () => {
    const { id } = useParams(); // Получаем ID задачи из параметров маршрута
    const navigate = useNavigate(); // Для навигации назад
    const [todo, setTodo] = useState(null); // Храним данные о задаче

    // Функция для получения задачи по ID
    const getTodoById = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const data = await res.json();
            setTodo(data); // Сохраняем данные о задаче в стейте
        } catch (error) {
            console.error('Ошибка при загрузке задачи:', error);
        }
    };

    // Загружаем данные о задаче при монтировании компонента
    useEffect(() => {
        getTodoById();
    }, [id]);

    // Функция для возврата на предыдущую страницу
    const handleBack = () => {
        navigate(-1);
    };

    if (!todo) {
        return <div className="loading">Загрузка...</div>; // Пока данные не загружены, показываем "Загрузка..."
    }

    return (
        <div className="todo-wrapper">
            <button className="back-button" onClick={handleBack}>Назад</button>
            <div className="todo-card">
                <h1 className="todo-title">Задача {todo.id}</h1>
                <p className="todo-body"><strong>Название:</strong> {todo.title}</p>
                <p className="todo-status"><strong>Статус:</strong> {todo.completed ? 'Выполнено' : 'Не выполнено'}</p>
                <p><strong>ID задачи:</strong> {todo.id}</p>
                <p><strong>Имя пользователя:</strong> {todo.userId}</p>
                <p><strong>Задача выполнена:</strong> {todo.completed ? 'Да' : 'Нет'}</p>
            </div>
        </div>
    );
};

export default TodosItem;

