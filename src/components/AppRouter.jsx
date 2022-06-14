import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from '../pages/About';
import MainPage from "../pages/MainPage";
import NotFound from '../pages/NotFound'
import Layout from './Layout';
import ModelPage from '../pages/ModelPage';
import Paymend from '../pages/Paymend';
import { models } from '../data/models';
import HomePage from '../pages/HomePage'





const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/main' element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="about" element={<About />} />
                {models.map(model_item =>
                    <Route path={model_item.title} element={<ModelPage />} title={model_item.title} />
                )}

                <Route path='paymend' element={<Paymend />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;