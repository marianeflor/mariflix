import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Menu.css'

// import ButtonLink from './componets/ButtonLink'
import Button from '../Button'


const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Mariflix Logo"/>
            </a>

            {/* <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink> */}

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu
