import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

const VideoRegistration = () => {
  const history = useHistory();

  const initialValues = {
    name: 'Jogo com JavaScript #01: Criando um Flappy Bird do ZERO!!!',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  };

  const { handleChange, values } = useForm(initialValues);
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ name }) => name);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const chosenCategory = categories.find((categoria) => categoria.name === values.categoria);

    videosRepository.create({
      titulo: values.name,
      url: values.url,
      categoriaId: chosenCategory.id,
    })
      .then(() => {
        console.log('Cadastrou com sucesso!');
        history.push('/'); // voltar para a pagina inicial ao fim do cadastro
      });
  };

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título do vídeo"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default VideoRegistration;
