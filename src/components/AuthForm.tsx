import React, { useState } from 'react';
import ProfileSection from './ProfileSection'; // la sección de perfil que ya hicimos

const AuthForm: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // Campos de login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Campos de registro
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [riskProfile, setRiskProfile] = useState('Moderado');

  const handleLogin = () => {
    if (username && password) {
      // Simula login exitoso
      setIsLoggedIn(true);
    } else {
      alert('Por favor ingresa usuario y contraseña.');
    }
  };

  const handleRegister = () => {
    if (name && email && password) {
      // Simula registro exitoso
      setIsLoggedIn(true);
      setIsRegistering(false);
    } else {
      alert('Completa todos los campos para registrarte.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setName('');
    setEmail('');
    setRiskProfile('Moderado');
  };

  // Si ya inició sesión → mostrar el perfil con opción de cerrar sesión
  if (isLoggedIn) {
    return (
      <div className="auth-wrapper">
        <ProfileSection />
        <button className="logout-btn" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    );
  }

  // Si no hay sesión → formulario de login o registro
  return (
    <div className="auth-form">
      {isRegistering ? (
        <>
          <h1>Registrarse</h1>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Perfil de riesgo:</label>
          <select
            value={riskProfile}
            onChange={(e) => setRiskProfile(e.target.value)}
          >
            <option value="Conservador">Conservador</option>
            <option value="Moderado">Moderado</option>
            <option value="Agresivo">Agresivo</option>
          </select>

          <button onClick={handleRegister}>Crear Cuenta</button>
          <p>
            ¿Ya tienes cuenta?{' '}
            <button
              className="link-btn"
              onClick={() => setIsRegistering(false)}
            >
              Iniciar Sesión
            </button>
          </p>
        </>
      ) : (
        <>
          <h1>Iniciar Sesión</h1>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar Sesión</button>
          <p>
            ¿No tienes cuenta?{' '}
            <button className="link-btn" onClick={() => setIsRegistering(true)}>
              Registrarse
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthForm;
