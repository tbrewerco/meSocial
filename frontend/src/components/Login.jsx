import { React, useState, useCallback } from 'react';
import { loginFields } from '../constants/formFields';
import Input from './Input';
import LoginButton from './loginButton';
import FormExtra from './FormExtra';
import FormAction from './FormAction';
import { Form } from 'react-router-dom';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const Login = () => {

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = useCallback((event) => {
    const { id, value } = event.target;
    const updatedField = { [id]: value };
    setLoginState((prevState) => ({ ...prevState, ...updatedField }))
  }, [])

  const authenticateUser = () => {

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticateUser();
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
              {...field}
            />
          )
        }
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  )
};

export default Login;