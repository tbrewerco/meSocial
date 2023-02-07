import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';

const LoginButton = () => {

    const success = (response) => {
        console.log("RESPONSE: " + JSON.stringify(response));
        localStorage.setItem('user', JSON.stringify(response));
        const { name, googleId, imageUrl } = response.profileObj;
        const doc = {
            _id: googleId,
            _type: 'user',
            username: name,
            image: imageUrl
        };
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
    )
}

export default LoginButton;