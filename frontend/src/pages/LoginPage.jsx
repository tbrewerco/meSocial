import { React } from 'react';
import danceVid from '../assets/dance_1.mp4';
import LoginButton from '../components/loginButton';
import LoginHeader from '../components/LoginHeader';
import Login from '../components/Login';

const LoginPage = () => {

    return (
        <div>
            <div className='flex justify-start items-center flex-col h-screen'>
                <div className='relative w-full h-full'>

                    <video
                        src={danceVid}
                        type="video/mp4"
                        loop
                        controls={false}
                        muted
                        autoPlay
                        className='w-full h-full object-cover'
                    />


                </div>
            </div>
            <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                {/* to-do: responsive resising */}
                <div className="bg-white min-h-332px rounded-lg flex items-center justify-center py-12 px-12" >
                    <div >
                        <LoginHeader
                            heading='Sign in to your account'
                            paragraph="Don't have an account yet?"
                            linkName='Sign up'
                            linkUrl='/signup'
                        />
                        <LoginButton />
                        <Login />
                    </div>
                </div>
            </div >
        </div >

    );
};

export default LoginPage;