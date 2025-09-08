import React, { useState } from 'react';
const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [riskProfile, setRiskProfile] = useState('Conservador');
  const handleRegister = () => {
    // Lógica de registro
  };
  return (
    <div className="registration-form">
      <h1>Registrarse</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nombre de Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <select
        value={riskProfile}
        onChange={(e) => setRiskProfile(e.target.value)}
      >
        <option value="Conservador">Conservador</option>
        <option value="Moderado">Moderado</option>
        <option value="Arriesgado">Arriesgado</option>
      </select>
      <button onClick={handleRegister}>Crear Usuario</button>
    </div>
  );
};
export default RegistrationForm;
