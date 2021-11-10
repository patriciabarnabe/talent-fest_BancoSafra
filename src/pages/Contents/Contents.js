import React from "react";
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

function Contents() {
    return (
        <>
            <Header/>
            <h1>Não vacile, trilhas em andamento</h1>
            <Card/>
            <article>
                <p>imagem</p>
                <Card/>
                <p>Titulo - Por onde começar: Estudar e estudar </p>
                <p>Descrição: Sim, não tem segredo, tudo na nossa vida 
                vai exigir esforços e estudar é aquela famosa receita para o sucesso</p>
            </article>
        </>
    )
}

export default Contents;
