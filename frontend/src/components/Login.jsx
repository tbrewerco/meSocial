import { React, useState } from 'react';
import { loginFields } from '../constants/formFields';
import Input from './Input';
import LoginButton from './loginButton';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const Login = () => {

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (event) => {
    setLoginState({ ...loginState, [event.target.id]: event.target.value });
  };

  return (
    <form className='mt-6 space-y-6'>
      <p className='text-center text-sm text-gray-600'>
        or
      </p>
      <div >
        {
          fields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          )
        }
      </div>
    </form>
  )
};

export default Login;