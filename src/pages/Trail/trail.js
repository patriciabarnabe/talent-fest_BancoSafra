import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, } from '@firebase/firestore';
import { db } from '../../services/firebase';

export default function Trail() { 
  let { id } = useParams()

  const [trilha, setTrilha] = useState([])

useEffect(() => {
  const trilhas = collection(db, 'trilha');
  const esperandoGetDocs = getDocs(trilhas)
  esperandoGetDocs.then((collectionTrilha) => {
       const newArray = [];
      collectionTrilha.forEach((doc) => {

           
          newArray.push(doc.data());
      });
      setTrilha(newArray);

  })
}, [])

  return (
    <div>{trilha[id]?.conteudo.map((content) => {
    })}</div>
  );
  
};
