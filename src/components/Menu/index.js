import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';

// import ButtonLink from './componets/ButtonLink'
import Button from '../Button';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="Mariflix Logo" />
    </Link>

    {/* <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink> */}

    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo Vídeo
    </Button>
  </nav>
);

export default Menu;
