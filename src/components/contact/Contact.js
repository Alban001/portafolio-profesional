import React, {useRef, useState, useContext} from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss'
import translate from '../../internalization/Translate';
import { LocaleContext } from '../apiContext/ApiContext';
import { Link } from 'react-router-dom';


const Contact = () => {
  
  const  [locale, setLocale,LOCALES] = useContext(LocaleContext)
  const [nombre, setNombre] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const formRef= useRef()
  const handleSubmit =(e)=>{
          e.preventDefault();
          emailjs.sendForm('service_sa9h6w7', 'template_v7oseuk', formRef.current, 'bkOiG1Oup1oVTHo3g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setNombre('')
      setSubject('')
      setEmail('')
      setMessage('')

  }
  
  return (
    <div className='contact' id='contact' >
        <div className="contact__left">
            <h1 >{translate('Contáctame Aquí', 'Contáctame Aquí')}</h1>
            <div className="contact__icon-container">
             <div className="contact__icon">
                  <i className="fa-solid fa-location-dot contact__icon-body"></i>
              <h2> Encarnación-Paraguay</h2>
              </div>
              <div className="contact__icon">
                <a href="https://www.linkedin.com/in/elias-alonzo-580219161"
                aria-label='Linkedin'
                rel='noopener'
                target='_blank'
                ><i className="fa-brands fa-linkedin contact__icon-body"></i></a> 
                <h2>Elias Alonzo</h2>
               
              </div>
              <div className="contact__icon">
              <a href="https://twitter.com/Elias_alban01"
                aria-label='Twitter'
                rel='noopener'
                target='_blank'
                ><i className="fa-brands fa-twitter contact__icon-body"></i></a> 
                <h2>@Elias_alban01</h2>
              </div>
            </div>
           
        </div>
        <div className="contact__right">
              <h1>{translate('Dispuesto a Nuevas Oportunidades', 'Dispuesto a Nuevas Oportunidades')}</h1>
              <p>{translate('Si el proyecto adecuado viene a mi, entonces trabajemos juntos!', 'Si el proyecto adecuado viene a mi, entonces trabajemos juntos!')}</p>
            <form ref={formRef} onSubmit={handleSubmit} className='contact__form'>
                <input type="text"  value={nombre} placeholder='Your name here' name='user_name' onChange={(e) => setNombre(e.target.value)}/>
                <input type="text" value={subject} placeholder='Your subject here' name='user_subject' onChange={(e) => setSubject(e.target.value)}/>
                <input type="text"  value={email} placeholder='Your email here' name='user_email' onChange={(e) => setEmail(e.target.value)}/>
                <textarea name="" id="" cols="30" rows="10" value={message} placeholder='Message here' name='user_message' onChange={(e) => setMessage(e.target.value)}></textarea>
                <input type="submit" value='Submit' className='contact__submit'/>
            </form>
        </div>
       
    </div>
  )
}

export default Contact
