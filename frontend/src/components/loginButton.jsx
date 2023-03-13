import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { client } from '../client';

const LoginButton = () => {
    const navigate = useNavigate();

    const success = async (response) => {
        localStorage.setItem('user', JSON.stringify(response.credential));

        const { email, name, jti, picture } = jwt_decode(response.credential);

        // form and save new user document to sanity
        const doc = {
            _id: jti,
            _type: 'user',
            username: name,
            image: picture,
            email: email
        };

        try {
            // check if user is already in the database
            const query = `count(*[_type == 'user' && email == '${email}'])`;
            const existingUser = await client.fetch(query);

            if (existingUser) {
                throw new Error('Email is already in use')
            } else {
                await client.createIfNotExists(doc)
                navigate('/', { replace: true });
            }

        } catch (error) {
            console.error(`Error creating user document: ${error.message}`);
        }

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