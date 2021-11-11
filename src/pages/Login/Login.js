import React from "react";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/button";
import ResponsiveAlert from "./../../components/ResponsiveAlert/ResponsiveAlert";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import "./login.css";

import LogoSafra from "./../../assets/logo-safra.png";
import GoBack from "./../../assets/seta-branca.png";
import GoogleBtn from "./../../assets/google-btn.png";

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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function googleTeste() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function redefinir() {
    sendPasswordResetEmail(auth, form.email)
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  function modalLogin() {
    setIsModal(true);
  }

  function modalRegister() {
    setIsModalVisible(true);
  }
  return (
    <>
      <ResponsiveAlert />

      <div className="geral">
        <img className="logo-safra" src={LogoSafra} alt="Logo Safra" />

        <form className="btn-login">
          <button onClick={modalLogin} type="button" className="class-button">
            Login
          </button>
          <button
            onClick={modalRegister}
            type="button"
            className="class-button"
          >
            Cadastro
          </button>
        </form>

        <Link to="/">
          <img src={GoBack} alt="Seta de voltar" className="goback" />
        </Link>

        {isModalVisible ? (
          <Modal onClose={() => setIsModalVisible(false)}>
            <h2 className="title-login text-align-center">Cadastrar</h2>
            <p className="title-login">Nome</p>
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
            <p className="title-login">Email</p>
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
            <p className="title-login">Senha</p>
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

            <button
              onClick={cadastro}
              type="button"
              className="class-button cadastro-btn"
            >
              Cadastrar
            </button>
          </Modal>
        ) : null}
        {modal ? (
          <Modal onClose={() => setIsModal(false)}>
            <h2 className="title-login text-align-center">Login</h2>
            <p className="title-login"> Email </p>
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
            <p className="title-login"> Senha </p>
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
            <span className="span-login">
              Redefinir senha: Digite seu e-mail e
            </span>
            <button onClick={redefinir} type="button" className="clean-button">
              clique aqui!
            </button>
            <div className="btn-container">
              <Link to="/home">
                <button
                  onClick={login}
                  type="button"
                  className="class-button login-btn"
                >
                  Entrar
                </button>
              </Link>
              <div className="input-group">
                <button
                  onClick={googleTeste}
                  type="button"
                  className="google-btn"
                >
                  <img src={GoogleBtn} alt="Botão do Google" />
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
        {modalReset ? (
          <Modal onClose={() => setIsModalReset(false)}>
            <h2 className="title-login">Login</h2>
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
    </>
  );
}

export default Login;
