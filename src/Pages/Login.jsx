import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Components/atoms/Button';
import Input from '../Components/atoms/Input';

import User from '../assets/icons/user.svg?react';
import Key from '../assets/icons/key.svg?react';
import Logo from '../assets/logo.svg?react';
import { emailRules, passwordRules } from '../helpers/validationRules';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    console.log(data);
    navigate('/list');
  };

  return (
    <div className="flex flex-col items-center self-center flex-1 w-full p-4 px-4 py-10 LOGIN">
      <Logo className="max-w-[200px] mb-20" />

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

        <Button className="w-full mb-4" type="submit">
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
