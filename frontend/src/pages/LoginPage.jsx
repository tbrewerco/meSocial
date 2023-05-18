import danceVid from '../assets/dance_1.mp4';
import LoginButton from '../components/loginButton';
import Header from '../components/Header';
import Login from '../containers/LoginSignupForm';
import { useState } from 'react';

const LoginPage = () => {

    // formType used for conditional login/signup display 
    const [formType, setFormType] = useState('login');

    // toggle function passed to child components to update state
    const toggleFormType = () => {
        setFormType(formType === 'login' ? 'signup' : 'login');
    };

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
            <div className='absolute flex flex-col overflow-scroll justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                <div className="bg-white min-h-332px rounded-lg flex items-center justify-center py-12 px-12" >
                    <div >
                        <Header
                            heading={formType === 'login' ? 'Sign in to your account' : 'Sign up for an account'}
                            paragraph={formType === 'login' ? "Don't have an account yet?" : 'Already have an account?'}
                            linkName={formType === 'login' ? 'Sign up' : 'Log in'}
                            formType={formType}
                            toggleFormType={toggleFormType}
                        />
                        <LoginButton />
                        <Login formType={formType} />
                    </div>
                </div>
            </div >
        </div >

    );
};

export default LoginPage;