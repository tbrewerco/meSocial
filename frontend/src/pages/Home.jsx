import { useState, useRef, useEffect } from 'react';
import { HiMenu, AiFillCloseCircle } from 'react-icons/ai';
import { link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile } from '../components';
import pins from '../containers/Pins';
import { client } from '../client';
import logo from '../assets/me_share5.png';

const Home = () => {
    return (
        <div>
            Home
        </div>
    );
};

export default Home;