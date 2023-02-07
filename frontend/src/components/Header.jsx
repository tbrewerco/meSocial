import { Link } from 'react-router-dom';
import logo from '../assets/me_share5.png';

const Header = ({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) => {
    return (
        <div className='mb-10'>
            <div className='flex justify-center'>
                <img
                    className='h-40 w-43'
                    src={logo}
                    alt='logo'
                />
            </div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                {heading}
            </h2>
            <p className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                {paragraph} {' '}
                <Link to={linkUrl} className='font-medium text-purple-600 hover:text-purple-500'>
                    {linkName}
                </Link>
            </p>
        </div>
    )
}

export default Header;