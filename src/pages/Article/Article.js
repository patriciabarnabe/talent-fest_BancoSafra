import React from "react";
import { useEffect, useState} from "react";
import Button from "../../components/Button/button";

const Article = () => {
    // const [article, setArticle] = useState({});
    // useEffect(() => ({
    //         "id": "1234",
    //         "title": "Article 1",
    //         "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    //         "director": "Hayao Miyazaki",
    //         "producer": "Isao Takahata",
    //         "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    //         "slide1": "Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa.",
    //         "slide2": "Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. ",
    //         "slide3": "Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. ",   
    //     })
    //     .then((resp) => {
    //         const slide1 = resp.filter(item => item.slide1);
    //         const slide2 = resp.filter(item => item.slide2);
    //         const slide3 = resp.filter(item => item.slide3);
    //         setArticle({
    //             slide1,
    //             slide2,
    //             slide3
    //         })
    // }, [])

    // useEffect(() => {
    //     console.log(article)
    // }, [article] )
    
    return (
        <div>
            <h1>Oi</h1>
           <Button
            children="Próxima"
           />  
        </div>
    );
}
export default Article;
