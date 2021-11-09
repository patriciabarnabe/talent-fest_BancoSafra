import { useState } from "react";
import React from 'react';

import Modal from "../../components/Modal/Modal";

function Login() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function modalText() {
    setIsModalVisible(true);
  }

  return (
    <>
      <button onClick={modalText}>oi</button>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <h2 className="h2-modal">teste</h2>
        </Modal>
      ) : null}
    </>
  );
}

export default Login;
