import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import Button from '../UI/button/Button';
import Modal from './modal/Modal';



const Header = (props) => {
  const [modal, setModal] = useState(false)
  const [modalAccount, setModalAccount] = useState(false)

  return (
    <div className="header">
      <h1 style={{ marginRight: '40px' }}>header</h1>
      <h1>links:</h1>
      <CustomLink className='nav__link' to='/'>Main</CustomLink>
      <CustomLink className='nav__link' to='/about'>About</CustomLink>
      <Modal visible={modalAccount} setVisible={setModalAccount}>
        <h1>23</h1>
        <Button onClick={() => setModalAccount(false)}>close</Button>
      </Modal>
      <Modal visible={modal} setVisible={setModal}>
        <h1>model</h1>
        <div>
          <h2>change model:</h2>
          <Link to='/model_1' onClick={() => setModal(false)}>modal 1</Link>
          <Link to='/model_2' onClick={() => setModal(false)}>modal 2</Link>
        </div>
        <Button onClick={() => setModal(false)}>close</Button>

      </Modal>
      <button className='nav__link' onClick={() => setModalAccount(true)}>account</button>
      <button className='nav__link' onClick={() => setModal(true)}>model</button>
    </div>
  );
};

export default Header;