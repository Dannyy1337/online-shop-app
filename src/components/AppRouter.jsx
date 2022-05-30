import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from '../pages/About';
import MainPage from "../pages/MainPage";
import NotFound from '../pages/NotFound'
import Layout from './Layout';
import ModelPageOne from '../pages/ModelPageOne'
import ModelPageTwo from '../pages/ModelPageTwo';
import Paymend from '../pages/Paymend';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="about" element={<About />} />
                <Route path='model_1' element={<ModelPageOne />} />
                <Route path='model_2' element={<ModelPageTwo />} />
                <Route path='paymend' element={<Paymend />} />

            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;