import React from "react";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/button";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modal, setIsModal] = useState(false);
  const [modalReset, setIsModalReset] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleFormChange = (e) => {
    if (e.target.getAttribute("name") === "name") {
      setForm({
        name: e.target.value,
        email: form.email,
        password: form.password,
      });
    } else if (e.target.getAttribute("name") === "email") {
      setForm({
        name: form.name,
        email: e.target.value,
        password: form.password,
      });
    } else if (e.target.getAttribute("name") === "password") {
      setForm({ name: form.name, email: form.email, password: e.target.value });
    }
  };

  function cadastro() {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  }

  function googleTeste() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(token, user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  }

  function redefinir() {
    sendPasswordResetEmail(auth, form.email)
      .then(() => {
        // Password reset email sent!
        // ..
        console.log("deu bão");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });
  }
  function modalLogin() {
    setIsModal(true);
  }

  function modalRegister() {
    setIsModalVisible(true);
  }
  return (
    <div className='geral'>
      {/* <img className="polygon" src={Polygon} alt="Polígono" />

      <img className="photo-profile" src={LoginImage} alt="Imagem de Login" /> */}

      <form className="btn-login">
        <Button onClick={modalLogin} type="button" variant="class-button">
          Login
        </Button>
        <Button onClick={modalRegister} type="button" variant="class-button">
          Cadastro
        </Button>
      </form>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <h2>Cadastrar</h2>
          <div className="input-group">
            <i className="far fa-user"></i>
            <Input
              inputType="text"
              inputName="name"
              inputPlaceholder="Digite seu nome"
              inputValue={form.name}
              inputChange={(e) => handleFormChange(e)}
              inputClassName=""
            />
          </div>
          <div className="input-group">
            <i className="far fa-envelope"></i>
            <Input
              inputType="email"
              inputName="email"
              inputPlaceholder="Digite seu e-mail"
              inputValue={form.email}
              inputChange={(e) => handleFormChange(e)}
              inputClassName=""
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <Input
              inputType="password"
              inputName="password"
              inputPlaceholder="Digite sua senha"
              inputValue={form.password}
              inputChange={(e) => handleFormChange(e)}
              inputClassName="input-form"
            />
          </div>
          <Button onClick={cadastro} type="button">
            CADASTRAR
          </Button>
          <p>Já tem cadastro? </p>
          <Link to={(e) => modalLogin(e)}> Clique aqui</Link>
        </Modal>
      ) : null}
      {modal ? (
        <Modal onClose={() => setIsModal(false)}>
          <h2>Login</h2>
          <div className="input-group">
            <i className="far fa-envelope"></i>
            <Input
              inputType="email"
              inputName="email"
              inputPlaceholder="Digite seu e-mail"
              inputValue={form.email}
              inputChange={(e) => handleFormChange(e)}
              inputClassName="input-form"
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <Input
              inputType="password"
              inputName="password"
              inputPlaceholder="Digite sua senha"
              inputValue={form.password}
              inputChange={(e) => handleFormChange(e)}
              inputClassName="input-form"
            />
          </div>
          <Button onClick={login} type="button">
            ENTRAR
          </Button>
          <div className="input-group">
            <Button onClick={googleTeste} type="button">
              <i class="fab fa-google"></i>
            </Button>
          </div>
          <Button onClick={redefinir} type="button">
            redefinir
          </Button>
        </Modal>
      ) : null}
      {modalReset ? (
        <Modal onClose={() => setIsModalReset(false)}>
          <h2>Login</h2>
          <div className="input-group">
            <i className="far fa-envelope"></i>
            <Input
              inputType="email"
              inputName="email"
              inputPlaceholder="Digite seu e-mail"
              inputValue={form.email}
              inputChange={(e) => handleFormChange(e)}
              inputClassName="input-form"
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <Input
              inputType="password"
              inputName="password"
              inputPlaceholder="Digite sua senha"
              inputValue={form.password}
              inputChange={(e) => handleFormChange(e)}
              inputClassName="input-form"
            />
          </div>
          <Button onClick={redefinir} type="button">
            redefinir
          </Button>
        </Modal>
      ) : null}
    </div>
  );
}

export default Login;
