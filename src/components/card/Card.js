import React, {useContext} from 'react'
import './card.css'
import github from '../img/github.png'
import deploy from '../img/deploy.png'
import translate from '../../internalization/Translate'
import { LocaleContext } from '../apiContext/ApiContext'

export const Card = ({img,alt,descrip}) => {
  
  return (
    <div>
     {/* Card Block */}
    <div className='card'>
        <img src={img} alt={alt} className='card__img'/>
        <div className="card__unit">
          <p>{descrip}</p>
        </div>
    </div>
     {/* Card Button Container */}

        <div className="btn-container">
            <div className="btn-container__unit">
                <div className="btn-container__icon">
                     <i className="fa-solid fa-window-maximize btn-container__icon-body"></i>
                </div>  
                      <p>{translate('Desplegar', 'Desplegar')}</p>
            </div>
              <div className="btn-container__unit">
                   <div className="btn-container__icon">
                     <i className="fa-brands fa-github btn-container__icon-body"></i>
                  </div>
                  <p>Github</p>
               </div>
        </div>
        </div>
  )
}
