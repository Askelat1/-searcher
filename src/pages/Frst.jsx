import React from 'react';
import Header from '../components/Header';
import module from './Frst.module.scss'
import { Link, NavLink } from 'react-router-dom';

function frst({users}) {
    return (
        <div>
            <nav>
                <NavLink to={'/'}>Дом</NavLink>
                <br />
                <NavLink to={'/about'}>О нас</NavLink>
            </nav>
            {/* <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={user.id}>{user.name}</Link>
                    </li>
                ))}
            </ul>
            <Header></Header> */}
        </div>
    );
}

export default frst;