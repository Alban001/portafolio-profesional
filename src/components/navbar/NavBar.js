import React, { useContext } from 'react'
import './navBar.scss'
import translate from '../../internalization/Translate'
import { LocaleContext } from '../apiContext/ApiContext'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const  [locale, setLocale,LOCALES] = useContext(LocaleContext)
  return (
    <div className='nav-bar'>
     <div className="nav-bar__left">
      <div className="nav-bar__icon">
          <i className="fa-solid fa-flag-usa nav-bar__icon-body" onClick={()=> setLocale(LOCALES.ENGLISH)}></i>
          {translate('Inglés', 'Inglés')}
      </div>
      <div className="nav-bar__icon">
          <i className="fa-solid fa-flag nav-bar__icon-body" onClick={()=> setLocale(LOCALES.SPANISH)}></i>
          {translate('Español', 'Español')}
      </div>    
     </div>
     <div className="nav-bar__right">
     <div className="tabs navBar">
          <ul>
             <li><a className='has-text-light' href='#home' >{translate('Principal', 'Principal')}</a></li>
             <li><a className='has-text-light' href='#about' >{translate('Sobre', 'Sobre')}</a></li>
             <li><a className='has-text-light' href='#project' >{translate('Projectos', 'Projectos')}</a></li>
             <li><a className='has-text-light' href='#contact' >{translate('Contacto', 'Contacto')}</a></li>
          </ul>
        </div>
     </div>
    </div>
  )
}

export default NavBar