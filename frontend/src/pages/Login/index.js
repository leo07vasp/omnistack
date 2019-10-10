import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email);

    const response = await api.post('/sessions', {
      email
    });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard');
  }

  return (
    <>
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
          required
          value={email}
          placeholder="Seu melhor e-mail"
        />

        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
