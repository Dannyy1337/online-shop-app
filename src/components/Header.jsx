import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import Button from '../UI/button/Button';
import Modal from './modal/Modal';
import icon from '../assets/icon.png'
import { models } from '../data/models'



const Header = (props) => {
  const [modal, setModal] = useState(false)
  const [modalAccount, setModalAccount] = useState(false)

  return (
    <div className="header">
      <div className="link__sector link__area">
        <CustomLink className='nav__link' to='/main'>Home</CustomLink>
        <CustomLink className='nav__link' to='/main/about'>About</CustomLink>
      </div>
      <img className='icon__header' src={icon} />
      <div className="modal__sector link__area">
        <Modal visible={modalAccount} setVisible={setModalAccount}>
          <h1>Sing in</h1>
          <form action="">
            <h3>Email:</h3>
            <input type="text" placeholder='Enter you email' />
            <h3>Password:</h3>
            <input type="password" placeholder='Enter you password' />
          </form>
          <Button onClick={() => setModalAccount(false)}>Enter</Button>
        </Modal>
        <Modal visible={modal} setVisible={setModal}>
          <h1>All models:</h1>
          <div>
            <h2>View more:</h2>
            {models.map(model_item =>
              <Link to={model_item.title} onClick={() => setModal(false)}>{model_item.title}</Link>
            )}

          </div>
          <Button onClick={() => setModal(false)}>close</Button>

        </Modal>
        <button className='nav__link' onClick={() => setModal(true)}>Models</button>
        <button className='nav__link' onClick={() => setModalAccount(true)}>Account</button>
      </div>


    </div>
  );
};

export default Header;