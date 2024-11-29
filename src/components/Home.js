import React, { useState } from 'react';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Usuario: ${username}, Contraseña: ${password}`);
  };

  const formStyle = {
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Bienvenido a la página de inicio</h1>
      <form style={formStyle} onSubmit={handleLogin}>
        <div>
          <label style={labelStyle} htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Home;
