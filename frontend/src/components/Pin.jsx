import React from 'react';
import { urlFor } from '../client';

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
    return (
        <img className='rounded-md w-full' alt='user-post' src={urlFor(image).width(250).url()}></img>
    )
}

export default Pin