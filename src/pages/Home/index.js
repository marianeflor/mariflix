import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
// import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

const Home = () => {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideo) => {
        setDadosIniciais(categoriesWithVideo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      {dadosIniciais.length === 0 && <div>Loading...</div>}

      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].name}
            videoDescription={dadosIniciais[0].videos[0].description}
            url={dadosIniciais[0].videos[0].url}
          />

          {dadosIniciais.map((dado, i) => (
            <Carousel
              key={dado.id}
              ignoreFirstVideo={i === 0}
              category={dado}
            />
          ))}
        </>
      )}

    </PageDefault>
  );
};

export default Home;
