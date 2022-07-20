import React, {useContext} from 'react'
import './about.css'
import sass from '../img/sass.png'
import github from '../img/github.png'
import html5 from '../img/html5.png'
import js from '../img/js.png'
import react from '../img/react.png'
import css from '../img/css.png'
import translate from '../../internalization/Translate'
import { LocaleContext } from '../apiContext/ApiContext'

export const About = () => {
  const  [locale, setLocale,LOCALES] = useContext(LocaleContext)
  return (
        <div className="about" id='about' >
         <div className="about__left">
        <h1 className='about__left aligment'>{translate('Tecnologías con las que trabajo', 'Tecnologías con las que trabajo')}</h1>
        <div className="about__img">
        <div className="about__icon">
             <i className="fa-brands fa-npm about__icon-body"></i>
        </div>
        <div className="about__icon">
             <i className="fa-brands fa-github about__icon-body"></i>
        </div>
        <div className="about__icon">
        <i className="fa-brands fa-js about__icon-body"></i>
        </div>
        <div className="about__icon">
        <i className="fa-brands fa-css3-alt about__icon-body"></i>
        </div>
        <div className="about__icon">
        <i className="fa-brands fa-js about__icon-body"></i>
        </div>
        <div className="about__icon">
        <i className="fa-brands fa-sass about__icon-body"></i>
        </div>
        <div className="about__icon">
        <i className="fa-brands fa-react about__icon-body"></i>
        </div>
        
        </div>
        </div>
        <div className="about__right">
            <h1>{translate('Sobre mi', 'Sobre mi')}</h1>
            <p>{translate('Soy una persona apasionada en la industria tecnológica, me encanta innovar y generar buenos productos. Utilizo la investigación y la formación constante como base, lo cuál me permite analizar, aplicar y mantener mejoras a largo plazo.', 'Soy una persona apasionada en la industria tecnológica, me encanta innovar y generar buenos productos. Utilizo la investigación y la formación constante como base, lo cuál me permite analizar, aplicar y mantener mejoras a largo plazo.')}</p>

        </div>
    </div>
  )
}
