import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <Header />
      <article >
        <h1>Sobre nós</h1>
          <p className='about-cards'>O portal "Menina de Vila", é um projeto de educação Financeira e Investimentos ligado ao Grupo Safra. Ele foi "criado por, e para, Mulheres”, seu principal objetivo é simplificar a linguagem do mercado financeiro, através de conteúdos sobre educação financeira para as meninas que não possuem acesso as informações na linguagem da periferia.</p>
      </article>
      <article>
        <h1>Nossa história</h1>
          <p className='about-cards'>Nascemos da indignação construtiva e do desejo de criar um movimento voltado para transformação das comunidades, pois sonhamos com um mundo onde todas possam ter as mesmas oportunidades.<br />
          <strong>Faça parte você também deste movimento, acredite que o amanhã pode sim, ser a realização dos nossos sonhos, bora escrever história!</strong></p>
      </article>
      <Navbar />
    </div>
  )
}

export default About