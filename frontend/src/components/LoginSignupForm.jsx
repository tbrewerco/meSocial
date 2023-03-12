import { useState, useCallback } from 'react';
import { loginFields, signupFields } from '../constants/formFields';
import Input from './Input';
import FormExtra from './FormExtra';
import FormAction from './FormAction';
import { client } from '../client';
import bcrypt from 'bcryptjs';

const Form = (props) => {

  //  use appropriate form fields based on the props passed in
  const fields = props.formType === 'signup' ? signupFields : loginFields;

  let fieldsState = {};
  fields.forEach(field => fieldsState[field.id] = '');

  const [formState, setFormState] = useState(fieldsState);

  const handleChange = useCallback((event) => {
    const { id, value } = event.target;
    const updatedField = { [id]: value };
    setFormState((prevState) => ({ ...prevState, ...updatedField }))
  }, [])

  // register user 
  const registerUser = async () => {
    const { username, password, email } = formState;

    // generate salt for password hash
    const salt = await bcrypt.genSalt(10);

    // hash password
    const hash = await bcrypt.hash(password, salt);

    const doc = {
      _type: 'user',
      username: username,
      password: hash,
      email: email
    };

    try {
      const createdDoc = await client.create(doc)
        .then(() => {
          navigate('/', { replace: true });
        });;
    } catch (error) {
      console.error(`Error creating user document: ${error.message}`);
    }
  };

  // const authenticateUser = () => {

  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (props.formType === 'login') await authenticateUser();
    else await registerUser();
  };

  return (
    <form className='mt-6 space-y-6' onSubmit={handleSubmit}>
      <p className='text-center text-sm text-gray-600'>
        {props.formType === 'login' ? 'or' : ''}
      </p>
      <div >
        {
          fields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={formState[field.id]}
              {...field}
            />
          )
        }
      </div>

      <FormExtra display={props.formType === 'signup' ? false : true} />
      <FormAction handleSubmit={handleSubmit} text={props.formType === 'signup' ? 'Sign Up' : 'Log in'} />
    </form>
  )
};

export default Form;