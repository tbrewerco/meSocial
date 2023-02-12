import React from 'react'

const FormExtra = () => {
    return (
        <div className='felx items-center justify-betwen'>
            <div className='flex items-center'>
                <input
                    type='checkbox'
                    id='remember-me'
                    name='remember-me'
                    className='h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded'
                />
                <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                >
                    Remember me
                </label>
            </div>

            <div className='text-sm'>
                <a href='#' className='font-medium text-purple-600 hover:text-purple-500'>
                    Forgot your password?
                </a>
            </div>
        </div>
    )
};

export default FormExtra