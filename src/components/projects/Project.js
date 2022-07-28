import React, {useContext} from 'react'
import { Card } from '../card/Card'
import './project.css'
import translate from '../../internalization/Translate'
import { LocaleContext } from '../apiContext/ApiContext'
import { cardContent } from '../card/CardData'
import { linksContent } from '../card/CardData'
export const Project = () => {
  const  [locale, setLocale,LOCALES] = useContext(LocaleContext)
  return (
    <div className='project' id='project' >
       <h1>{translate('Inspiración & Creación', 'Inspiración & Creación')}</h1>
       <p className='project aligment'> {translate('Porque la inspiración me lleva a crear la mejor solución a una necesidad, mi objetivo está enfocado en liderar un proyecto que cambiará el entorno del usuario final.', 'Porque la inspiración me lleva a crear la mejor solución a una necesidad, mi objetivo está enfocado en liderar un proyecto que cambiará el entorno del usuario final.')}</p>
        <div className="project__listado">
            {cardContent.map((item)=>(
              <Card key={item.id} img={item.img} alt={item.alt} descrip={item.descrip} />
            ))
            }
        </div>
        
    </div>
  )
}
