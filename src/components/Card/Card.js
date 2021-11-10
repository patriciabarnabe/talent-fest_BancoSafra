import React from "react";

import './card.css'

const Card = (trilha, cardClicked) => {

    const article = trilha.trilha
    console.log(article, article.autora, article.imagem)

    return (
        <article className='article' onClick={cardClicked}>
            <div className="container-card">

                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <span className="stars"></span>
                            <h2 className="text-card">{article.autora}</h2>
                            <p className="text-card">{article.descricao}</p>
                            <p className="text-card">{article.descricao}</p>
                        </div>
                    </div>
                    <div className="face face2">
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

                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card;

// import React from 'react'
// import './card.css'

// function Card({imageUrl}) {
//     return(
//         <div className='card-container'>
//             <div className='image-container'>
//                 <img src={imageUrl} alt='' />
//             </div>
//             <div className='card-title'>
//             </div>

//         </div>
//     )
// }

// export default Card
