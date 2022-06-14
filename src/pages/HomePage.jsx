import React from 'react';
import { Link } from 'react-router-dom';
import '../style/HomePage.scss'

const HomePage = () => {
    return (
        <div className='home__page'>
            <div className="home__page-header">
                <img className='home__page-icon' src={require('../assets/icon.png')} />
            </div>
            <div className="home__page-container">
                <div className="left__sector">
                    <h1>home</h1>
                    <Link className='home__page-btn' to='/main'>
                        <span>watch it!</span>
                        <div className="wave">
                            
                        </div>
                    </Link>
                </div>
                <div className="right__sector">
                    <img className="home__page-img__group" src={require('../assets/img_group.png')} />
                    <h2 className='home__page-desc'>All rights belong to their authors®</h2>
                </div>
            </div>




        </div>
    );
};

export default HomePage;