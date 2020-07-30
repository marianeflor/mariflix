import React from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';

const Home = () => (
  <PageDefault>
    <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription="O que é Front-end?"
    />

    {dadosIniciais.categorias.map((categoria, i) => (
      <Carousel
        key={i}
        ignoreFirstVideo={i === 0}
        category={dadosIniciais.categorias[i]}
      />
    ))}
  </PageDefault>
);

export default Home;
