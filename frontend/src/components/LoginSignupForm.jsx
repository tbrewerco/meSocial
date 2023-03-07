import { useState, useCallback } from 'react';
import { loginFields, signupFields } from '../constants/formFields';
import Input from './Input';
import FormExtra from './FormExtra';
import FormAction from './FormAction';

const Form = (props) => {

  //  use appropriate form fields based on the props passed in
  const fields = props.formType === 'signup' ? signupFields : loginFields;

  let fieldsState = {};
  fields.forEach(field => fieldsState[field.id] = '');

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
        {props.formType === 'login' ? 'or' : ''}
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

      <FormExtra display={props.formType === 'signup' ? false : true} />
      <FormAction handleSubmit={handleSubmit} text='Login' />
    </form>
  )
};

export default Form;