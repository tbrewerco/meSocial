import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import danceVid from '../assets/dance_1.mp4';
import logo from '../assets/me_share5.png';
import LoginButton from '../components/loginButton';
import LogoutButton from '../components/logoutButton';
const Landing = () => {

    return (
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

                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div>
                        <div className='p-5'>
                            <img src={logo} width='300px' alt='logo' />
                        </div>
                        <div className='shadow-2xl'>
                            <LoginButton />
                        </div>
                    </div>
                </div>

            </div>
            <LogoutButton />
        </div>
    );
};

export default Landing;