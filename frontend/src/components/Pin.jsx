import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDownloadForOffline, MdThumbUp, MdCheckCircleOutline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';

import { fetchUser } from '../utils/fetchUser';
import { checkIfLiked, createLike, unlikePost } from '../services/likeService';

const Pin = ({ pin }) => {
    const baseStyles = 'relative w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out';
    const normalScreenStyles = 'grayscale hover:grayscale-0';
    const touchScreenStyles = 'grayscale-0';

    const [postHovered, setPostHovered] = useState(false);
    const [alreadySaved, setAlreadySaved] = useState(false);
    const [styles, setStyles] = useState(`${baseStyles} ${normalScreenStyles}`);

    const navigate = useNavigate();
    const user = fetchUser();

    const savePin = async (id) => {
        if (!alreadySaved) {
            try {
                await createLike(user.id, id);
                setAlreadySaved(true);
            } catch (err) {
                console.error('Error saving pin', err);
            }
        }
    };

    const unlikePin = async (pinId) => {
        try {
            await unlikePost(user.id, pinId);
            setAlreadySaved(false);
        } catch (err) {
            console.error('Error unlikeing pin', err);
        }
    };

    useEffect(() => {
        const checkLike = async () => {
            try {
                const isLiked = await checkIfLiked(user.id, pin.dataValues.id);
                setAlreadySaved(isLiked);
            } catch (err) {
                console.error('Error checking like', err);
            }
        };
        checkLike();

        // check if the user is using a touch device
        if (window.matchMedia("(pointer: coarse)").matches) {
            setPostHovered(true);
        }
    }, [pin.dataValues.id, user.id]);

    return (
        <div >
            <div
                onMouseEnter={() => setPostHovered(true)}
                onMouseLeave={() => setPostHovered(false)}
                onTouchStart={() => setStyles(`${baseStyles} ${touchScreenStyles}`)}
                onTouchEnd={() => setStyles(`${baseStyles} ${normalScreenStyles}`)}
                onClick={() => navigate(`/pin-detail/${pin.dataValues.id}`)}

                className={styles}

            >
                <img className=' w-full' alt='user-post' src={pin.image}></img>
                {postHovered && (
                    <div
                        className='absolute top-0 w-full height-full flex flex-col justify-end p-2 pr-2 pt-2 pb-2 z-50'
                        style={{ height: '100%' }}
                    >
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2'>
                                <a
                                    href={pin.image}
                                    download
                                    onClick={(event) => event.stopPropagation()}
                                    className='bg-white w-7 height-7 p-1 rounded-full items-center justify-center text-dark text-xl opacity-50 hover:opacity-100 hover:shadow-md'
                                >
                                    <MdDownloadForOffline />
                                </a>
                            </div>
                            {alreadySaved ? (
                                <button
                                    type='button'
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        unlikePin(pin.dataValues.id);
                                    }}
                                    className='bg-white w-7 height-7 items-center rounded-full opacity-50 hover:opacity-100'
                                >
                                    <MdCheckCircleOutline font-size={'29px'} />
                                </button>
                            ) : (
                                <button
                                    type='button'
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        savePin(pin.dataValues.id);
                                    }}
                                    className='bg-white w-7 height-7 p-1 rounded-full items-center justify-center text-dark text-xl opacity-50 hover:opacity-100 hover:shadow-md'>
                                    {/* {save?.length} */}
                                    <MdThumbUp />
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Pin