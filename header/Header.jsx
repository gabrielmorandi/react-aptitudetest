import React from 'react'
import './header.css'
import Logo from '../../assets/logo.svg'
import {MdOutlineLanguage} from 'react-icons/md'

const Header = () => {
  return (
    <header>
      <div className="logo"><a href="#"><img src={Logo} /></a></div>

      <nav>
        <div className="teste"><a href="#">Teste de Personalidade</a></div>
        <div className="tipos"><a href="#">Tipos de Personalidade</a></div>
        <div className="contato"><a href="#">Contato</a></div>
      </nav>

      <div className="idioma"><MdOutlineLanguage /> Portugues Brasileiro</div>
    </header>
  )
}

export default Header