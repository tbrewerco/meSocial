import danceVid from '../assets/dance_1.mp4';
import Header from '../components/Header';
import Login from '../components/LoginSignupForm';

const SignupPage = () => {

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
                        className='w-screen h-screen object-cover'
                    />

                </div>
            </div>
            <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                {/* to-do: responsive resising */}
                <div className="bg-white rounded-lg flex items-center justify-center p-12" >
                    <div >
                        <Header
                            heading='Sign up for an account'
                            paragraph="Already have an account?"
                            linkName='Log in'
                            linkUrl='/login'
                        />
                        <Login formType="signup" />
                    </div>
                </div>
            </div >
        </div >

    );
};

export default SignupPage;