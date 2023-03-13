import React from 'react';

const fixedInputClassName = 'rounded-md appearance-none block w-full px-2 py-2 border border-gray-300 border hover:border-red-300 placeholder-gray-500 text-gray-500 focus:outline-none focus:ring-red-500 text-sm focus:border-red-500 focus:z-10 sm:text-sm';

const Input = (props) => {
    const {
        handleChange,
        value,
        labelText,
        labelFor,
        id,
        name,
        type,
        isRequired = false,
        placeholder,
        customClass
    } = props;
    return (
        <div className='my-5'>
            <label htmlFor={labelFor} className='sr-only'> {/* sr-only = screen reader only */}
                {labelText}
            </label>
            <input
                onChange={handleChange}
                value={value || ''}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClassName + customClass}
                placeholder={placeholder}
            />
        </div>
    )
};

export default Input;