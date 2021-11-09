import Button from '../Button/button';

export const CarouselSlideArticle = ({stateCollection}) => {
  return (
    <> 
      <section>
        { stateCollection && stateCollection.map((item) => (
          <div  key={item.id}>
            <article>
              <ul className="title-article">
                <li>{item.title}</li>
              </ul>
              <img> R$ {item.image},00</img>
              <ul className="slides">
                <li>{item.slide1}</li>
                <li>{item.slide2}</li>
                <li>{item.slide3}</li>
                <li>{item.slide4}</li>
                <li>{item.slide5}</li>
                <li>{item.slide6}</li>
                <li>{item.slide7}</li>
                <li>{item.slide8}</li>
                <li>{item.slide9}</li>
              </ul>
            {item.slide9 ? <Button children='Finalizar'/> : '' } 
            </article>
          </div>
        ))}
      </section>

    </>
  )
}
    
  