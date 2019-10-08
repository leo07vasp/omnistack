import React, { useState } from 'react';

import api from './services/api';

import './App.css';
import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email);

    const response = await api.post('/sessions', {
      email
    });

    console.log(response);
  }

  return (
    <div className="container">
      <img src={logo} alt="" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{' '}
          <strong>talentos</strong> para seu time
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email *</label>
          <input
            onChange={event => setEmail(event.target.value)}
            type="email"
            id="email"
            value={email}
            placeholder="Seu melhor e-mail"
          />

          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
