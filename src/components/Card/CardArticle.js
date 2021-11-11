import React from "react";

import './card.css'

const CardArticle = ({ article, children }) => {

    return (
        <article className='article'>
            <div className="container-card">

                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <span className="stars"></span>
                            <p className="text-card">{article}</p>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardArticle;