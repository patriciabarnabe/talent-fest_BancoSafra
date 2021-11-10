import React from 'react';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel'
import Button from '../../components/Button/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './about.css';


const About = () => {
  
  const [tab, setTab] = useState('article');
  const handleTab = (tabSelect) =>{
    setTab(tabSelect)
  }

  return (
    <div className='about'>
      <Header />

      <div className='button-container'>
          <button type="button" className='button-article' onClick={()=>handleTab('article')}>
            Artigos
          </button>

      
          <button type="button" className='button-about' onClick={()=>handleTab('about')}>
            Sobre
          </button>
       
      </div>
      <section className='container-public'>
        
        {tab === 'article'
 && 
          <Carousel />
        }
        {tab === 'about' && 
        <>
          <article >
            <h1>Sobre nós</h1>
            <p className='about-cards'>O portal "Menina de Vila", é um projeto de educação Financeira e Investimentos ligado ao Grupo Safra. Ele foi "criado por, e para, Mulheres”, seu principal objetivo é simplificar a linguagem do mercado financeiro, através de conteúdos sobre educação financeira para as meninas que não possuem acesso as informações na linguagem da periferia.</p>
        </article>
        <article>
          <h1>Nossa história</h1>
            <p className='about-cards'>Nascemos da indignação construtiva e do desejo de criar um movimento voltado para transformação das comunidades, pois sonhamos com um mundo onde todas possam ter as mesmas oportunidades.<br />
            <strong>Faça parte você também deste movimento, acredite que o amanhã pode sim, ser a realização dos nossos sonhos, bora escrever história!</strong></p>
        </article>
        </>
        }
      </section>
      <Link to='/login'>
        <Button className='class-button to-login'>Fazer parte da comunidade</Button>
      </Link>

    </div>
  )
}

export default About