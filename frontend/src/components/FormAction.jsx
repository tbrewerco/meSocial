import React from 'react'

const FormAction = ({
    type = 'Button',
    action = 'submit',
    text
}) => {
    return (
        type === 'Button' ?
            <>
                <button
                    type={action}
                    className='group relative w-full flex justify-center p-2 cursor-pointer rounded-md outline-1 outline-gray-400 outline hover:outline-red-300'
                >
                    {text}
                </button>
            </>
            :
            <></>
    )
};

export default FormAction;