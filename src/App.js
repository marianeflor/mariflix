import React from 'react'
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import dadosIniciais from './data/dados_iniciais.json'

function App() {
  return (
    <div style={{ backgroundColor: '#141414'}}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />

      {dadosIniciais.categorias.map((categoria, i) => (
        <Carousel 
          ignoreFirstVideo={i === 0}
          category={dadosIniciais.categorias[i]}
        />
      ))}

      <Footer />

    </div>
  )
}

export default App
