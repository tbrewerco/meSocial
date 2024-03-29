import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

import logo from '../assets/me_share5_noborder.png';

const Sidebar = ({ user, closeToggle }) => {
    const handleCloseSidebar = () => {
        if (closeToggle) closeToggle(false)
    }

    const isNotActiveStyle = 'flex items-center px-5 gap-3 text-red-600 hover:text-red-400 transition-all duration-200 ease-in-out capitalize';
    const isActiveStyle = 'flex items-center px-5 gap-2 text-red-600 font-extrabold border-r-2 border-red-600 transition-all duration-200 ease-in-out capitalize';

    const categories = [
        { name: 'People' },
        { name: 'Tech' },
        { name: 'News' },
        { name: 'Events' },
        { name: 'Sports' },
        { name: 'Gaming' },
        { name: 'Shorts' },
        { name: 'Other' }
    ];

    return (
        <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-100 hide-scrollbar">

            <div className="flex flex-col">

                <Link
                    to="/"
                    className="flex px-1 gap-2 my-6 pt-1 w-190 items-center"
                    onClick={handleCloseSidebar}
                >
                    <img src={logo} alt="logo" className="w-full" />
                </Link>

                <div className="flex flex-col gap-5">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                        onClick={handleCloseSidebar}
                    >
                        <RiHomeFill />
                        Home
                    </NavLink>
                    {/* last category is not shown in list */}
                    {categories.slice(0, categories.length).map((category) => (
                        <NavLink
                            to={`/category/${category.name}`}
                            className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                            onClick={handleCloseSidebar}
                            key={category.name}
                        >
                            {category.name}
                        </NavLink>
                    ))}

                </div>
            </div>

            <div>
                {user && (
                    <Link
                        to={`user-profile/${user._id}`}
                        className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg'
                        onClick={handleCloseSidebar}
                    >
                        <img
                            src={user.image}
                            className='w-10 h-10 rounded-full'
                            alt='user-profile'
                        />
                    </Link>

                )}
            </div>

        </div>
    )
}

export default Sidebar;