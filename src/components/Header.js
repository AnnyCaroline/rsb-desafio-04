import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <nav className="navbar">
            <div>
                <img src="https://i.imgur.com/KDIDiSE.png" alt="facebook" />
            </div>
            <div>
                <span>Meu perfil</span>
                <i className="material-icons">account_circle</i>
            </div>
        </nav>
    )
}
