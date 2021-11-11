import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, } from '@firebase/firestore';
import { db } from '../../services/firebase';

const Trail = () => {
  
  let idParam = Number(JSON.parse(JSON.stringify(useParams())).id);

const [trilha, setTrilha] = useState([])

useEffect(() => {
  const trilhas = collection(db, 'trilha');
  const esperandoGetDocs = getDocs(trilhas)
  esperandoGetDocs.then((collectionTrilha) => {
       const newArray = [];
      collectionTrilha.forEach((doc) => {

          console.log(doc.data()); 
           
          newArray.push(doc.data());
      });
      console.log(newArray);
      setTrilha(newArray);

  })
}, [])

  console.log();
  return (
    <div>{trilha[idParam]?.conteudo.map((content) => {
      console.log(content);
    })}</div>
  );
  
};

export default Trail;

