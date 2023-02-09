import { Link } from 'react-router-dom';
import logo from '../assets/me_share5.png';

const LoginHeader = ({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) => {
    return (
        <div className="max-w-md w-full space-y-8">
            <div className='mb-10'>
                <div className='flex justify-center'>
                    <img
                        className="h-28 w-34"
                        src={logo}
                        alt='logo'
                    />
                </div>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    {heading}
                </h2>
                <p className='mt-2 text-center text-sm text-gray-600 mt-5'>
                    {paragraph} {' '}
                    <Link to={linkUrl} className='font-medium text-red-600 hover:text-red-400'>
                        {linkName}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginHeader;