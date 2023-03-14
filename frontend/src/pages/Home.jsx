import { useState, useRef, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { client } from '../client';
import { userQuery } from '../utils/data';

import { Sidebar, UserProfile } from '../components';
import Pins from '../containers/Pins';
import logo from '../assets/me_share5.png';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';

const Home = () => {
    const [ToggleSideBar, setToggleSideBar] = useState(false);
    const [user, setUser] = useState(null)

    // get user info from local storage if defined
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    useEffect(() => {
        const query = userQuery(userInfo?.jti);
        async function fetchData() {
            const userDoc = await client.fetch(query);
            setUser(userDoc[0]);
        };
        fetchData();
    }, [])

    return (
        <div className='flex bg-gray-50 md:flex-grow flex-col h-screen transaction-height duration-75 ease-out'>
            <div className='hidden md:flex h-screen flex-initial'>
                <Sidebar />
            </div>
            <div className='flex md:hidden flex-row'>
                <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSideBar(false)} />
                <Link to='/'>
                    <img src={logo} alt='logo' className='w-28' />
                </Link>
                <Link to={`user-profile/${user?._id}`}>
                    <img src={user?.image} alt='logo' className='w-10' />
                </Link>

            </div>

        </div>
    );
};

export default Home;