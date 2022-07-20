import React, {useContext} from 'react'
import translate from '../../internalization/Translate'
import { LocaleContext } from '../apiContext/ApiContext'

import './footer.scss'
const Footer = () => {
  const  [locale, setLocale,LOCALES] = useContext(LocaleContext)
  return (
    <div className='footer'>
     <h2>{translate('Diseñado y Construido por Elias Alonzo', 'Diseñado y Construido por Elias Alonzo')}<span>2022</span></h2> 
    </div>
  )
}

export default Footer