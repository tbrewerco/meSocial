import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { client } from '../client';

const LoginButton = () => {
    const navigate = useNavigate();

    const URL = import.meta.env.VITE_SANITY_PROJECT_GOOGLE_AUTH_URL;

    const success = async (response) => {
        const id_token = response.credential

        const serverResponse = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_token })
        });

        if (!serverResponse.ok) {
            throw new Error('Failed to authenticate with server.');
        };

        const { session } = await serverResponse.json();
        localStorage.setItem('session', session);

        navigate('/', { replace: true });
    };

    const failure = (response) => {
        console.log("FAILURE: " + JSON.stringify(response));
    };

    return (
        <div className='g_id_signin flex w-full justify-center items-center p-1 cursor-pointer rounded-md outline-1 outline-white outline hover:outline-red-300'>
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