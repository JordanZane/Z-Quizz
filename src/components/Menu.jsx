import React from 'react';
import logoImg from '../images/logo.svg'
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={logoImg} alt="ZQuiz" />
            </div>
            <h1>Zquiz</h1>
            <nav>
                <ul>
                    <li>
                    <NavLink to="/"><i className="fa-solid fa-house"></i></NavLink>
                    </li>
                    <li>
                    <NavLink to="/">Catégories</NavLink>

                    </li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default Menu;