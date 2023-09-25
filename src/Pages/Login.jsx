import { Link, useNavigate } from 'react-router-dom';
import Button from '../Components/atoms/Button';
import Input from '../Components/atoms/Input';

import User from '../assets/icons/user.svg?react';
import Key from '../assets/icons/key.svg?react';
import Logo from '../assets/logo.svg?react';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="outline flex flex-col items-center self-center flex-1 w-full p-4 LOGIN max-w-[340px] px-4 py-10">
      <Logo className="max-w-[200px] mb-20" />

      <Input placeholder="Email" icon={<User className="text-primary-500" />} />

      <Input
        placeholder="Password"
        icon={<Key className="text-primary-500" />}
      />

      <Button className="w-full mb-4" onClick={() => navigate('/list')}>
        Login
      </Button>

      <Button as="Link" to="/settings" type="outline" className="w-full mb-2">
        Settings
      </Button>

      <Link to="/register" className="py-2 text-sm uppercase text-primary-400">
        register
      </Link>
    </div>
  );
};

export default Login;
