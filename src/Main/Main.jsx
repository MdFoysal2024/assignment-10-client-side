import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="min-h-[calc(100vh-220px)] ">

                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;