import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const User = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const getUserById = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await res.json();
            setUser(data);
        } catch (error) {
            console.error('Ошибка при загрузке пользователя:', error);
        }
    };

    useEffect(() => {
        getUserById();
    }, [id]);

    const handleBack = () => {
        navigate(-1);  // Возвращает на предыдущую страницу
    };

    if (!user) {
        return <div className="loading">Загрузка...</div>;
    }

    return (
        <div className="user-wrapper">
            <button className="back-button" onClick={handleBack}>Назад</button>
            <div className="user-card">
                <h1 className="user-title">{user.name}</h1>
                <p className="user-body"><strong>Email:</strong> {user.email}</p>
                <p className="user-body"><strong>Username:</strong> {user.username}</p>
                <p className="user-body"><strong>Телефон:</strong> {user.phone}</p>
                <p className="user-body"><strong>Website:</strong> {user.website}</p>
                <h2>Адрес:</h2>
                <p className="user-body">
                    <strong>Улица:</strong> {user.address.street}<br />
                    <strong>Квартира:</strong> {user.address.suite}<br />
                    <strong>Город:</strong> {user.address.city}<br />
                    <strong>Почтовый индекс:</strong> {user.address.zipcode}<br />
                    <strong>Гео:</strong> {`Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`}
                </p>
                <h2>Компания:</h2>
                <p className="user-body">
                    <strong>Компания:</strong> {user.company.name}<br />
                    <strong>Слоган:</strong> {user.company.catchPhrase}<br />
                    <strong>Описание:</strong> {user.company.bs}
                </p>
            </div>
        </div>
    );
};

export default User;
