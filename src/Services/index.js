import { db } from './firebase'
import { collection, getDocs} from 'firebase/firestore'

 export const  getTrilha = async () => {
    const trilhas = collection(db, 'trilha');
    const esperandoGetDocs = await getDocs(trilhas)
    const retornoDafuncao = esperandoGetDocs.docs.forEach(doc => doc.data())
    console.log(retornoDafuncao)
    return retornoDafuncao
    

} 

//  const querySnapshot = await getDocs(collection(db, "users"));
//  querySnapshot.forEach((doc) => {
//    console.log(`${doc.id} => ${doc.data()}`);
//  });