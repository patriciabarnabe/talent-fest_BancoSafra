import { db } from './firebase'
import { collection, getDocs} from 'firebase/firestore'

// export const showSlide = () => getDocs(collection(db, 'trilha'))
// .then((productsArrayFirestore) => console.log(productsArrayFirestore))
 export const getTrilha = async () => {
    const trilhas = collection(db, 'trilha');
    const esperandoGetDocs = await getDocs(trilhas)
    
    // esperandoGetDocs
    // .then((resp) => console.log(resp))
    // .catch((err) => console.log(err))
    console.log(esperandoGetDocs.docs)
 } 

