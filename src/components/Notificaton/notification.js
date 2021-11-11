import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import './notification.css'

const Notification = ({ type, conteudo }) => {
const  [show, setshow] = useState(true)
    
    return (
        
        <Alert variant={"danger"}>{conteudo}</Alert>
        
    )
  }
  
  export default Notification;