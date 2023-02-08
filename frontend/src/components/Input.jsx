import React from 'react';

const fixedInputClassName = 'rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm';

const Input = (
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeHolder,
    customClass
) => {
    return (
        <div className='my-5'>
            <label htmlFor={labelFor} className='sr-only'> {/* sr-only = screen reader only */}
                {labelText}
            </label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClassName + customClass}
            />
        </div>
    )
};

export default Input;