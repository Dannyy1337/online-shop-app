import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';


const Layout = () => {
    return (
        <div className='wrapper'>

            <Header />
            <div className='wrapper__container'>
                <Outlet />
            </div>

            <Footer />

        </div>
    );
};

export default Layout;