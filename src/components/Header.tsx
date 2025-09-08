import React from 'react';
const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Nombre de la Plataforma</h1>
      <nav>
        <ul>
          <li>
            <a href="#market">Mercado</a>
          </li>
          <li>
            <a href="#chatbot">Chat Bot</a>
          </li>
          <li>
            <a href="#news">Noticias</a>
          </li>
          <li>
            <a href="#trade">Trade del Día</a>
          </li>
          <li>
            <a href="#profile">Perfil</a>
          </li>
          <li>
            <a href="#logout">Cerrar Sesión</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
