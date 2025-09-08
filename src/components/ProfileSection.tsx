import React, { useState } from 'react';

const ProfileSection: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [riskProfile, setRiskProfile] = useState('Moderado');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [imageSize, setImageSize] = useState(80); // tamaño inicial en px

  // Manejo de imagen
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Manejo de cambio de tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="profile-section">
      <h2>Perfil</h2>

      {/* Imagen de perfil con tamaño ajustable */}
      <div className="profile-image">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Perfil"
            style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
          />
        ) : (
          <div
            className="placeholder"
            style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
          >
            Sin foto
          </div>
        )}
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {/* Slider para ajustar tamaño */}
        <div className="image-resizer">
          <label>Tamaño:</label>
          <input
            type="range"
            min="40"
            max="120"
            value={imageSize}
            onChange={(e) => setImageSize(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Perfil de riesgo */}
      <div className="risk-profile">
        <label>Perfil de riesgo:</label>
        <select
          value={riskProfile}
          onChange={(e) => setRiskProfile(e.target.value)}
        >
          <option value="Conservador">Conservador</option>
          <option value="Moderado">Moderado</option>
          <option value="Agresivo">Agresivo</option>
        </select>
      </div>

      {/* Tema visual */}
      <div className="theme-toggle">
        <label>Tema visual:</label>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌞 Claro' : '🌙 Oscuro'}
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
