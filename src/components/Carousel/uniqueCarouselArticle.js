

 const UniqueCarouselArticle = ({stateCollection}) => {
  
  const showCardArticle = () => {
    for (item of stateCollection){
      item
    } 
  }
  return (
    <> 
      <section>
        { stateCollection && stateCollection.map((item) => (
          <div  key={item.id}>
            <article>
              <ul className="title-article">
                <li>{item.title}</li>
              </ul>
              <img>{item.image}</img>
              <ul className="slides">
                <li>{showCardArticle}</li>
              </ul>
            </article>
          </div>
        ))}
      </section>

    </>
  )
}
export default UniqueCarouselArticle;
  