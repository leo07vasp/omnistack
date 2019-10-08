import React, { useState, useMemo } from 'react';

import api from '../../services/api';

import camera from '../../assets/camera.svg';
import './styles.css';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    const user_id = localStorage.getItem('user');
    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    await api.post('/spots', data, {
      headers: { user_id }
    });

    history.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        style={{ backgroundImage: `url(${preview})`, backgroundSize: 'cover' }}
        id="thumbnail"
        className={thumbnail ? 'hasThumb' : ''}
      >
        <input
          onChange={event => setThumbnail(event.target.files[0])}
          type="file"
        />
        <img src={camera} alt="Select Image" />
      </label>

      <label htmlFor="company">Empresa *</label>
      <input
        value={company}
        onChange={event => setCompany(event.target.value)}
        id="company"
        placeholder="Sua empresa *"
        type="text"
      />

      <label htmlFor="techs">
        Tecnologias * <span>(separados por virgula)</span>{' '}
      </label>
      <input
        value={techs}
        onChange={event => setTechs(event.target.value)}
        id="techs"
        placeholder="Quais tecnologias usam *"
        type="text"
      />

      <label htmlFor="company">
        Valor diária * <span> (em branco para gratuito) </span>{' '}
      </label>
      <input
        value={price}
        onChange={event => setPrice(event.target.value)}
        id="price"
        placeholder="seu preço *"
        type="text"
      />

      <button className="btn">CADASTRAR</button>
    </form>
  );
}
