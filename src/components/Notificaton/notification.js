import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


const Notification = ({ type, conteudo }) => {
const  [show, setshow] = useState(true)
    
    return (
        <Alert variant={type}>{conteudo}</Alert>
    )
  }
  
  export default Notification;