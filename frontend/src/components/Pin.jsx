import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
// import { BsFillArrowUpRightCircleFill } from 'react-icons/ai';

import { client, urlFor } from '../client';

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
    const [postHovered, setPostHovered] = useState(false);
    const [savingPost, setSavingPost] = useState(false);

    const navigate = useNavigate();

    return (
        <div className='m-3'>
            <div
                onMouseEnter={() => setPostHovered(true)}
                onMouseLeave={() => setPostHovered(false)}
                onClick={() => navigate(`/pin-detail/${_id}`)}
                className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
            >
                <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()}></img>
                {postHovered && (
                    <div
                        className='absolute top-0 w-full height-full flex flex-col justify-between p-2 pr-2 pt-2 pb-2 z-50'
                        style={{ height: '100%' }}
                    >
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2'>
                                <a
                                    href={`${image?.asset?.url}?dl=`}
                                    download
                                    onClick={(event) => event.stopPropagation()}
                                    className='bg-white w-7 height-7 p-1 rounded-full items-center justify-center text-dark text-xl opacity-50 hover:opacity-100 hover:shadow-md'
                                >
                                    <MdDownloadForOffline />
                                </a>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pin