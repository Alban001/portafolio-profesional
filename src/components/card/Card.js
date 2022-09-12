import React, {useContext} from 'react'
import './card.scss'
import github from '../img/github.png'
import deploy from '../img/deploy.png'
import { LocaleContext } from '../apiContext/ApiContext'
import { linksContent, linksData } from './CardData'
import translate from '../../internalization/Translate'


export const Card = ({img,alt,descrip,web, git}) => {
  return (
    <div>
     {/* Card Block */}
     <div className='card'>
        <img src={img} alt={alt} className='card__img'/>
        <div className="card__unit">
          <p>{descrip}</p>
        </div>
        <div className="btn-container">
            <div className="btn-container__unit">
                <div className="btn-container__icon">
                <a  href={web}
                aria-label='Linkedin'
                rel='noopener'
                target='_blank'
                ><i className="fa-solid fa-window-maximize btn-container__icon-body"></i></a> 
                </div>
                <p>{translate('Desplegar', 'Desplegar')}</p>
            </div>
              <div className="btn-container__unit">
                   <div className="btn-container__icon">
                   <a href={git}
                aria-label='Linkedin'
                rel='noopener'
                target='_blank'
                ><i className="fa-brands fa-github btn-container__icon-body"></i></a>
                  </div>
                  <p>Github</p>
               </div>
        </div>
    </div>
   
    </div>
  )
}
