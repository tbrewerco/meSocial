import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';

import { client } from '../client';

const LoginButton = () => {
    const navigate = useNavigate();

    const success = (response) => {
        console.log("RESPONSE: " + JSON.stringify(response));

        localStorage.setItem('user', JSON.stringify(response));

        const { name, googleId, imageUrl } = response.profileObj;

        // form and save new user document to sanity
        const doc = {
            _id: googleId,
            _type: 'user',
            username: name,
            image: imageUrl
        };

        client.createIfNotExists(doc)
            .then(() => {
                navigate('/', { replace: true });
            });
    };

    const failure = (response) => {
        console.log("FAILURE: " + JSON.stringify(response));
    };

    return (

        <div class='g_id_signin' className=' flex w-full justify-center items-center p-1 cursor-pointer rounded-md outline-1 outline-white outline hover:outline-red-300'>

            <GoogleLogin
                shape='rectangular'
                width='300'
                theme='filled_black'
                text="signin_with"
                size='medium'
                onSuccess={success}
                onFailure={failure}
                cookiePolicy='single_host_origin'
            />

        </div>
    );
};

export default LoginButton;