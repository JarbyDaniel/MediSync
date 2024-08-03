import React from 'react'
import Hero from '../Hero/Hero'
import Footer from '../../templates/Footer/Footer'
import Citas from '../Citas/Citas'
import emailjs from 'emailjs-com'


export const Dashboard = () => {
  function enviarEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_eaca2d8', 'template_hmlf1w9', e.target, 'JlU2lgM-jzn3dCHcJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  
  return (
    <>
      <Hero />
      <Footer />
    </>,
    <form onSubmit={enviarEmail}>
      <input type="text" value={'Alex'}  name="nombre" id="nombre" placeholder="Nombre" />
      <input type="email" value={'alexcarvajal@unicauca.edu.co'} name="correo" id="correo" placeholder="Correo" />
      <input type="text" value={'Cita programada'} id="asunto" name="asunto" placeholder="Asunto" />
      <textarea name="mensaje" id="mensaje" value={'Tienes una cita programada para mañana 4 de julio 2024, hora 2:30pm'} placeholder="Mensaje" />
      <button type="submit">Enviar</button>
    </form>  
  )
}