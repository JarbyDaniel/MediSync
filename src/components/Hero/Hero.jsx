import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-main">
        <div className="hero-content">
          <h1> Conecta con Tu Salud en el <span>Hospital Susana López</span></h1>
          <p>Programa tus citas y recibe recordatorios para tus medicamentos y citas.</p>
          <Link to="/login" className='button-hero'>
            Agenda tu cita aqui!
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Hero