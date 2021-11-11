import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, } from '@firebase/firestore';
import { db } from '../../services/firebase';


const Trail = () => {
  
  let idParam = Number(JSON.parse(JSON.stringify(useParams())).id);

//   console.log(idParam) 
//   const teste =['renan', 'carmen', 'jennifer']
//   function getDocTrail() {
//   const trilhas = collection(db, "trilha");
//   const esperandoGetDocs = getDocs(trilhas);
//   esperandoGetDocs.then((collectionTrilha) => {
//     const newArray = [];
//     console.log(collectionTrilha);
//     collectionTrilha.forEach((doc) => {
//       newArray.push(doc);
//       return newArray;
//     });
//     console.log(newArray[idParam]);
//   });
// }
//   getDocTrail()
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

// const docRef = doc(db, "trilha", "1");
// const docSnap = await getDoc(docRef);
// console.log(docSnap)

// const querySnapshot = getDocs(collection(db, "trilha"));
// console.log(querySnapshot)

// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });


// const getDocT = getDocTrail();

// function Trail() {
//   let params = useParam

