"use client";
import React from 'react';
import Topbar from './TopBar';
import MainNav from './MainNav';

const Navbar = () => {
    return (
        <nav>
           <Topbar />
           <MainNav />
        </nav>
    );
};

export default Navbar;
