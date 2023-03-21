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
    const scrollRef = useRef(null);
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    useEffect(() => {
        const query = userQuery(userInfo?.jti);
        async function fetchData() {
            const userDoc = await client.fetch(query);
            setUser(userDoc[0]);
        };
        fetchData();
    }, [])

    useEffect(() => {
        scrollRef.current.scrollTo(0, 0)
    }, []);

    return (
        <div className='flex bg-gray-50 md:flex-grow flex-col h-screen transaction-height duration-75 ease-out'>
            <div className='hidden md:flex h-screen flex-initial'>
                <Sidebar user={user && user} />
            </div>
            <div className='flex md:hidden flex-row'>
                <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
                    <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSideBar(true)} />
                    <Link to='/'>
                        <img src={logo} alt='logo' className='w-28' />
                    </Link>
                    <Link to={`user-profile/${user?._id}`}>
                        <img src={user?.image} alt='logo' className='w-10' />
                    </Link>
                </div>
                {ToggleSideBar && (
                    <div className='fixed w-full bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
                        <div className='absolute w-full flex justify-end items-center p-2'>
                            <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSideBar(false)} />
                        </div>
                        <Sidebar user={user && user} closeToggle={setToggleSideBar} />
                    </div>
                )}
            </div>
            <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
                <Routes>
                    <Route path='/user-profile/:userId' element={<UserProfile />} />
                    <Route path='/*' element={<Pins user={user && user} />} />
                </Routes>
            </div>
        </div>
    );
};

export default Home;