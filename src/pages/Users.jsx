import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="users-container">
            <h1 className="users-title">Страница пользователей</h1>
            <div className="users-grid">
                {users.map((user) => (
                    <Link to={`/useritem/${user.id}`} className="user-card" key={user.id}>
                        <h2 className="user-name">{user.name}</h2>
                        <p className="user-username">Username: {user.username}</p>
                        <p className="user-email">Email: {user.email}</p>
                        <p className="user-phone">Телефон: {user.phone}</p>
                        <p className="user-website">Website: {user.website}</p>
                        <p className="user-address">
                            Адрес: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                        </p>
                        <p className="user-company">
                            Компания: {user.company.name}, {user.company.catchPhrase}, {user.company.bs}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Users;

