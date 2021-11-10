import React from "react";

import './card.css'

const Card = () => {

    return (
        <article className='article'>
            <div class="container-card">

                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <span class="stars"></span>
                            <h2 class="text-card">Java</h2>
                            <p class="text-card">Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
                        </div>
                    </div>
                    <div class="face face2">
                        <section className='info-card'>
                            <h2 className='title-card'>01</h2>
                            <div className='icons-card'>
                                <i class="fas fa-piggy-bank"></i>
                                <i class="far fa-heart"></i>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card;
