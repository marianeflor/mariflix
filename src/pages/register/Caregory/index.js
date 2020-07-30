import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CategoryRegistration = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categoryValues, setCategoryValues] = useState(initialValues);
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    const key = e.target.getAttribute('name');
    const { value } = e.target;

    setCategoryValues({
      ...categoryValues,
      [key]: value, // name: 'valor'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories([
      ...categories,
      categoryValues,
    ]);

    setCategoryValues(initialValues);
  };

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (serverResponse) => {
          if (serverResponse.ok) {
            const resp = await serverResponse.json();
            setCategories(resp);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoryValues.name}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          tag="input"
          label="Nome da Categoria"
          type="text"
          name="name"
          value={categoryValues.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={categoryValues.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={categoryValues.color}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categories.length === 0 && <div>Loading...</div>}

      <ul>
        {categories.map((category, i) => (
          <li key={i}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default CategoryRegistration;
