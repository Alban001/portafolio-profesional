import React,{useContext} from 'react'
import './intro.scss'
import yo from '../img/yo.jpg'
import translate from '../../internalization/Translate'
import { LocaleContext } from '../apiContext/ApiContext'

const Intro = () => {
  const  [locale, setLocale,LOCALES] = useContext(LocaleContext)

  return (

    <div className="intro" id='home'>

        <div className="intro__left">
          <div className="intro__descriptive">
           <h1>{translate('Hola!', 'Hola!')}</h1>
            <h1>{translate('Soy Elias Alonzo', 'Soy Elias Alonzo')}</h1>
            <p>{translate('Desarrollador web, creo contenido utilizando las últimas tendencias en el área web, analizando la necesidad específica y buscando las mejores prácticas para cumplir con todos los núcleos de un proyecto.', 'Desarrollador web, creo contenido utilizando las últimas tendencias en el área web, analizando la necesidad específica y buscando las mejores prácticas para cumplir con todos los núcleos de un proyecto.')}</p>
           </div>
            <div className='intro__content'>
                <p className='intro__neon'>{translate('Desarrollador Web', 'Desarrollador Web')}</p>
                <p className='intro__neon'>{translate('Creador de Contenido', 'Creador de Contenido')}</p>
                <p className='intro__neon'>{translate('Creación & Diseño', 'Creación & Diseño')} </p>
            </div>
        </div>


        <div className="intro__right">
            <img src={yo} alt="author" className='grid__image'/>
        </div>
    </div>
 
  )
}

export default Intro