import React from "react";

import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../services/firebase.js";

import { Routes, Route, useParams } from "react-router-dom";
import Article from "../pages/Article/Article";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Notfound/Notfound";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Contents from "../pages/Contents/Contents";
import About from "../pages/About/About";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contents" element={<Contents />} />
      <Route path="/" element={<About />} />

      <Route path="/:id" element={<Trail />} />
    </Routes>
  );
};

function Trail() {
  let { id } = useParams();

  const teste = ["renan", "carmen", "jennifer"];

  // const docRef = doc(db, "trilha", "1");
  // const docSnap = await getDoc(docRef);
  // console.log(docSnap)

  // const querySnapshot = getDocs(collection(db, "trilha"));
  // console.log(querySnapshot)

  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  // function getDocTrail() {
  //   const trilhas = collection(db, "trilha");
  //   const esperandoGetDocs = getDocs(trilhas);
  //   esperandoGetDocs.then((collectionTrilha) => {
  //     const newArray = [];
  //     console.log(collectionTrilha);
  //     collectionTrilha.forEach((doc) => {
  //       newArray.push(doc);
  //       return newArray;
  //     });
  //     console.log(newArray[0]);
  //   });
  // }
  // const getDocT = getDocTrail();

  return (
    <div>
      <h3>ID: {teste[id]}</h3>
    </div>
  );
}

// function Trail() {
//   let params = useParams();
//   return <h1>Trail {params.id}</h1>;
// }
