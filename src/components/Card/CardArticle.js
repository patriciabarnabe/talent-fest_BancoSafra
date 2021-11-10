import React from "react";

import './card.css'

const CardArticle = (article) => {

    return (
        <article className='article'>
            <div className="container-card">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <span className="stars"></span>
                            { article && article.map((trilha, index) => {
                
                                return (
                                    <div key={index}>
                                        <div>
                                            <div>{trilha.titulo}</div>
                                            <div>{trilha.autora}</div>
                                            <section>
                                                {trilha.conteudo[0]}
                                            </section>
                                            <section>
                                                {trilha.conteudo[1]}
                                                
                                            </section>
                                        </div>
                                        <div>{article.likes}</div>
                                    </div> 
                                )
                            })}
                        </div>
                    </div>
                    {/* <div className="face face2">
                        <section className='info-card'>
                            <h2 className='title-card'>{article.titulo}</h2>
                            <div className='icons-card'>
                                <i className="far fa-bookmark"></i>
                                <i className="far fa-heart"><span className="number-likes">{article.likes}</span></i>
                            </div>
                        </section>
                        <img className='image-card'
                            src={article.imagem}
                        />
                        <h3 className='category-card'>{article.categoria}</h3>

                    </div> */}
                </div>
            </div>
        </article>
    )
}

export default CardArticle;