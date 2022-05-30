import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <a href="#"><img className='social__icon' src={require('../assets/social/inst.png')} /></a>
        <a href="#"><img className='social__icon' src={require('../assets/social/link.png')} alt="" /></a>
        <a href="#"><img className='social__icon' src={require('../assets/social/teleg.png')} alt="" /></a>




      </div>
      <h3>All rights reserved®</h3>
      <a href="#"><img className='social__icon-git' src={require('../assets/social/github.png')} alt="" /> </a>
    </div >
  );
};

export default Footer;