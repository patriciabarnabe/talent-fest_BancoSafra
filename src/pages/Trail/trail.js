import React from 'react';
import { useParams } from 'react-router-dom';

function Trail() {
  function sim() {
    let { id } = useParams()
  console.log(id) 
  return id
  }


  return (
    <div>{() => sim()}</div>
  );
  
};

export default Trail;
