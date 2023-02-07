import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';

import { client } from '../client';

const LoginButton = () => {
    const navigate = useNavigate();

    const success = (response) => {
        console.log("RESPONSE: " + JSON.stringify(response.profileObj));

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
        <GoogleLogin
            clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
                <button
                    type='button'
                    className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                >
                    <FcGoogle className='mr-2' /> Sign in with Google
                </button>
            )}
            onSuccess={success}
            onFailure={failure}
            cookiePolicy='single_host_origin'
        />
    );
};

export default LoginButton;