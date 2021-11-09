import React from 'react';
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/button";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail
} from "firebase/auth";
import { IconName } from "react-icons/fa";

function Login() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  //const [name, setFormName] = useState('');
  //const [email, setFormEmail] = useState('');
  //const [password, setFormPassword] = useState('');
  const [form, setForm] = useState(
    {
      'name': '',
      'email': '',
      'password': ''
    });
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleFormChange = (e) => {
    if (e.target.getAttribute('name') === 'name') {
      setForm({ 'name': e.target.value, 'email': form.email, 'password': form.password });
    }
    else if (e.target.getAttribute('name') === 'email') {
      setForm({ 'name': form.name, 'email': e.target.value, 'password': form.password });
    }
    else if (e.target.getAttribute('name') === 'password') {
      setForm({ 'name': form.name, 'email': form.email, 'password': e.target.value });
    }
  }

  function cadastro() {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode)
      });
  }

function googleTeste() {
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(token, user)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode,errorMessage,email,credential)
  });
}

function redefinir() {
sendPasswordResetEmail(auth, form.email)
  .then(() => {
    // Password reset email sent!
    // ..
    console.log('deu bão')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode)
    // ..
  });
}
  function modalText() {
    setIsModalVisible(true)
  }
  return (
    <>

      <button onClick={modalText}>oi</button>
      {isModalVisible ? (<Modal onClose={() => setIsModalVisible(false)}>
        <Input
          inputType='text'
          inputName='name'
          inputPlaceholder='Digite seu nome'
          inputValue={form.name}
          inputChange={(e) => handleFormChange(e)}
          inputClassName=''
        />
        <Input
          inputType='email'
          inputName='email'
          inputPlaceholder='Digite seu e-mail'
          inputValue={form.email}
          inputChange={(e) => handleFormChange(e)}
          inputClassName=''
        />
        <Input
          inputType='password'
          inputName='password'
          inputPlaceholder='Digite sua senha'
          inputValue={form.password}
          inputChange={(e) => handleFormChange(e)}
          inputClassName=''
        />
        <Button onClick={cadastro} type='button'>Cadastrar</Button>
        <Button onClick={login} type='button'>entrar</Button>
        <Button onClick={googleTeste} type='button'>FcGoogle</Button>
        <Button onClick={redefinir} type='button'>redefinir</Button>
      </Modal>) : null}
    </>
  )
}

export default Login;
