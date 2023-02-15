import React from 'react';

const FormExtra = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>

                <input
                    type='checkbox'
                    id='remember-me'
                    name='remember-me'
                    className='w-4 h-4 text-gray-600 rounded focus:ring-red-400 text-sm hover:text-red-400'
                />

                <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-600'
                >
                    Remember me
                </label>

            </div>

            <div className='text-sm'>
                <a href='#' className='font-medium text-red-600 hover:text-red-400'>
                    Forgot your password?
                </a>
            </div>

        </div>
    )
};

export default FormExtra;