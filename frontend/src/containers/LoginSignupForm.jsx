import { useState, useCallback } from 'react';
import { loginFields, signupFields } from '../constants/formFields';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import FormExtra from '../components/FormExtra';
import FormAction from '../components/FormAction';
import authService from '../services/authService';

const Form = (props) => {
  const navigate = useNavigate();

  //  use appropriate form fields based on the props passed in
  const fields = props.formType === 'signup' ? signupFields : loginFields;
  let fieldsState = {};
  fields.forEach(field => fieldsState[field.id] = '');

  const [formState, setFormState] = useState(fieldsState);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleChange = useCallback((event) => {
    const { id, value } = event.target;
    const updatedField = { [id]: value };
    setFormState((prevState) => ({ ...prevState, ...updatedField }))
  }, [])


  const registerUser = async () => {
    const { username, password } = formState;
    const email = formState['email-address'];

    try {
      await authService.registerUser(username, password, email);
      navigate('/', { replace: true });
    } catch (error) {
      setAlertOpen(true);
    };
  };

  const loginUser = async () => {
    const { username, password } = formState;

    try {
      await authService.loginUser(username, password);
      navigate('/', { replace: true });
    } catch (error) {
      setAlertOpen(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (props.formType === 'login') await authenticateUser();
    else await registerUser();
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <form className='mt-6 space-y-6' onSubmit={handleSubmit}>
      <p className='text-center text-sm text-gray-600'>
        {props.formType === 'login' ? 'or' : ''}
        {alertOpen && (
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">That email is already in use.</span>
            <span onClick={handleAlertClose} class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" role="button" viewBox="0 0 20 20"><title  >Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
          </div>
        )}
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