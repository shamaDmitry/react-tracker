import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../Components/atoms/Button';
import Input from '../Components/atoms/Input';

import User from '../assets/icons/user.svg?react';
import Key from '../assets/icons/key.svg?react';
import Logo from '../assets/logo.svg?react';
import { emailRules, passwordRules } from '../helpers/validationRules';
import { LOCAL_STORAGE_TOKEN_NAME } from '../../config';
import { useState } from 'react';
import userApi from '../api/modules/user.api';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorMessage(undefined);

    const { response, err } = await userApi.signin(data);

    if (response) {
      setIsLoading(false);

      // dispatch(setUser(response));
      // toast.success("Sign in success");

      localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, JSON.stringify(response));
      navigate('/list');
    }

    if (err) {
      setIsLoading(false);
      setErrorMessage(err);
    }
  };

  return (
    <div className="flex flex-col items-center self-center flex-1 w-full p-4 px-4 py-10 LOGIN">
      <Logo className="max-w-[200px] mb-20" />

      {location.state && (
        <div className="mb-3 text-red-500">{location.state.message}</div>
      )}

      {errorMessage && (
        <div className="p-3 mb-4 text-sm text-red-500 border border-red-500 rounded">
          {JSON.stringify(errorMessage, null, 2)}
        </div>
      )}

      <form className="w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          placeholder="Email"
          icon={<User />}
          name="email"
          required
          {...register('email', emailRules)}
          error={errors.email}
        />

        <Input
          placeholder="Password"
          icon={<Key />}
          name="password"
          required
          {...register('password', passwordRules)}
          error={errors.password}
        />

        <Button className="w-full mb-4" type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>

      <Button as="Link" to="/settings" color="outline" className="w-full mb-2">
        Settings
      </Button>

      <Link to="/register" className="py-2 text-sm uppercase text-primary-400">
        register
      </Link>
    </div>
  );
};

export default Login;
