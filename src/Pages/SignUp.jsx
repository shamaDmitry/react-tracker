import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';
import Button from '../Components/atoms/Button';
import Input from '../Components/atoms/Input';

const SignUp = () => {
  return (
    <div className="outline flex flex-col items-center self-center flex-1 w-full p-4 SignUp max-w-[340px] px-4">
      <Logo className="max-w-[200px] mb-4" />

      <Input placeholder="Email" />
      
      <Input placeholder="Password" />

      <Button className="w-full mb-4">register</Button>
      <Button className="w-full mb-4">Settings</Button>

      <Link to="/login" className="py-2 text-sm uppercase text-primary-400">
        login
      </Link>
    </div>
  );
};

export default SignUp;
